// server.js — бэкенд для My Way: регистрация/логин, синхронизация данных,
// тестовый платёжный флоу (pending → succeeded, статус хранится в БД).
//
// Запуск:  cd server && npm install && npm start
// По умолчанию слушает :3000. Отдаёт статику фронтенда из ../ (app.js, index.html и т.д.),
// так что открыв http://localhost:3000 вы получите фронтенд, уже говорящий с этим бэкендом.
//
// ВАЖНО про "тестовый режим оплаты": это НЕ настоящий платёжный шлюз (Stripe/Kaspi/etc —
// для них нужен отдельный мерчант-аккаунт и ключи, которых у нас нет). Это честная
// имитация полного жизненного цикла платежа на СВОЁМ сервере: заявка создаётся,
// получает id и статус "pending", подтверждение проверяется и сохраняется в БД,
// premium выдаётся только после подтверждённого платежа — а не через один клик на
// фронтенде, как было раньше. Когда будет реальный провайдер, меняется только
// содержимое /api/payment/test-confirm — весь остальной флоу (создание заявки,
// хранение статуса, выдача premium) останется таким же.

const path = require('path');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// В проде обязательно задайте свой JWT_SECRET через переменную окружения —
// этот дефолт годится только для локальной разработки/демо.
const JWT_SECRET = process.env.JWT_SECRET || 'dev-only-secret-change-me-in-production';
if (!process.env.JWT_SECRET) {
  console.warn('[My Way] ВНИМАНИЕ: JWT_SECRET не задан, используется небезопасный dev-секрет. Задайте JWT_SECRET перед деплоем в прод!');
}

// Цены задаются ТОЛЬКО на сервере — клиент присылает только код плана,
// не сумму, иначе пользователь мог бы прислать любую цену через devtools.
const PLANS = {
  monthly: { amount: 3500, currency: 'KZT', label: 'Premium — 1 месяц' },
  yearly:  { amount: 35000, currency: 'KZT', label: 'Premium — 1 год' },
};

app.use(cors());
app.use(express.json());

// ── AUTH HELPERS ─────────────────────────────────────────────
function signToken(email) {
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: '30d' });
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'no token' });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.email = payload.email;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'invalid or expired token' });
  }
}

function isValidEmail(e) { return typeof e === 'string' && e.includes('@') && e.includes('.'); }

// ── AUTH ROUTES ──────────────────────────────────────────────
app.post('/api/register', async (req, res) => {
  const { name, email: rawEmail, password } = req.body || {};
  const email = (rawEmail || '').trim().toLowerCase();
  if (!name || !isValidEmail(email) || !password || password.length < 8) {
    return res.status(400).json({ error: 'invalid name, email or password (min 8 chars)' });
  }
  const existing = db.prepare('SELECT email FROM users WHERE email = ?').get(email);
  if (existing) return res.status(409).json({ error: 'email already registered' });

  const hash = await bcrypt.hash(password, 12);
  const now = Date.now();
  db.prepare('INSERT INTO users (email, name, password_hash, premium, created_at) VALUES (?, ?, ?, 0, ?)')
    .run(email, name, hash, now);
  db.prepare('INSERT INTO user_data (email, data_json, updated_at) VALUES (?, ?, ?)')
    .run(email, JSON.stringify({ trialStart: now }), now);

  res.json({ token: signToken(email), name, email });
});

app.post('/api/login', async (req, res) => {
  const { email: rawEmail, password } = req.body || {};
  const email = (rawEmail || '').trim().toLowerCase();
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  if (!user) return res.status(401).json({ error: 'user not found' });
  const ok = await bcrypt.compare(password || '', user.password_hash);
  if (!ok) return res.status(401).json({ error: 'wrong password' });
  res.json({ token: signToken(email), name: user.name, email });
});

app.get('/api/me', requireAuth, (req, res) => {
  const user = db.prepare('SELECT email, name, premium, premium_until, created_at FROM users WHERE email = ?').get(req.email);
  if (!user) return res.status(404).json({ error: 'not found' });
  res.json({ user });
});

// ── DATA SYNC ────────────────────────────────────────────────
app.get('/api/data', requireAuth, (req, res) => {
  const row = db.prepare('SELECT data_json FROM user_data WHERE email = ?').get(req.email);
  res.json({ data: row ? JSON.parse(row.data_json) : null });
});

app.put('/api/data', requireAuth, (req, res) => {
  const { data } = req.body || {};
  if (!data || typeof data !== 'object') return res.status(400).json({ error: 'missing data' });
  const now = Date.now();
  const existing = db.prepare('SELECT email FROM user_data WHERE email = ?').get(req.email);
  if (existing) {
    db.prepare('UPDATE user_data SET data_json = ?, updated_at = ? WHERE email = ?').run(JSON.stringify(data), now, req.email);
  } else {
    db.prepare('INSERT INTO user_data (email, data_json, updated_at) VALUES (?, ?, ?)').run(req.email, JSON.stringify(data), now);
  }
  res.json({ ok: true, updated_at: now });
});

// ── TEST-MODE PAYMENTS ──────────────────────────────────────
// 1) create: клиент выбирает план -> сервер создаёт запись со статусом pending
app.post('/api/payment/create', requireAuth, (req, res) => {
  const { plan } = req.body || {};
  const planInfo = PLANS[plan];
  if (!planInfo) return res.status(400).json({ error: 'unknown plan' });

  const id = crypto.randomUUID();
  db.prepare('INSERT INTO payments (id, email, plan, amount, currency, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .run(id, req.email, plan, planInfo.amount, planInfo.currency, 'pending', Date.now());

  res.json({ paymentId: id, plan, amount: planInfo.amount, currency: planInfo.currency, label: planInfo.label, status: 'pending' });
});

// 2) test-confirm: имитирует callback платёжного шлюза "оплата прошла".
// В тестовом режиме подтверждение делает сам клиент (кнопка "Оплатить тестовой картой"),
// в реальном режиме этот же путь дёргал бы вебхук банка/Kaspi/Stripe.
app.post('/api/payment/test-confirm', requireAuth, (req, res) => {
  const { paymentId } = req.body || {};
  const payment = db.prepare('SELECT * FROM payments WHERE id = ? AND email = ?').get(paymentId, req.email);
  if (!payment) return res.status(404).json({ error: 'payment not found' });
  if (payment.status === 'succeeded') return res.json({ status: 'succeeded', already: true });

  const now = Date.now();
  const durationMs = payment.plan === 'yearly' ? 365 * 24 * 3600 * 1000 : 30 * 24 * 3600 * 1000;
  db.prepare('UPDATE payments SET status = ?, confirmed_at = ? WHERE id = ?').run('succeeded', now, paymentId);

  const user = db.prepare('SELECT premium_until FROM users WHERE email = ?').get(req.email);
  const base = (user.premium_until && user.premium_until > now) ? user.premium_until : now;
  const premiumUntil = base + durationMs;
  db.prepare('UPDATE users SET premium = 1, premium_until = ? WHERE email = ?').run(premiumUntil, req.email);

  res.json({ status: 'succeeded', premium_until: premiumUntil });
});

app.get('/api/payment/status/:id', requireAuth, (req, res) => {
  const payment = db.prepare('SELECT id, plan, amount, currency, status, created_at, confirmed_at FROM payments WHERE id = ? AND email = ?')
    .get(req.params.id, req.email);
  if (!payment) return res.status(404).json({ error: 'payment not found' });
  res.json({ payment });
});

app.post('/api/payment/cancel', requireAuth, (req, res) => {
  db.prepare('UPDATE users SET premium = 0 WHERE email = ?').run(req.email);
  res.json({ ok: true });
});

// ── STATIC FRONTEND ──────────────────────────────────────────
app.use(express.static(path.join(__dirname, '..')));

app.listen(PORT, () => {
  console.log(`[My Way] Сервер запущен: http://localhost:${PORT}`);
});
