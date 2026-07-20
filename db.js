// db.js — тонкий слой поверх SQLite (better-sqlite3, синхронный, без лишних зависимостей).
// Файл базы данных лежит рядом (myway.db) и создаётся автоматически при первом запуске.
const path = require('path');
const Database = require('better-sqlite3');

const db = new Database(path.join(__dirname, 'myway.db'));
db.pragma('journal_mode = WAL');
// Без этой прагмы better-sqlite3 не проверяет FOREIGN KEY при вставках/обновлениях,
// и объявленные в схеме связи users<->user_data/payments ничего не гарантируют.
db.pragma('foreign_keys = ON');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  email TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  premium INTEGER NOT NULL DEFAULT 0,
  premium_until INTEGER,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS user_data (
  email TEXT PRIMARY KEY,
  data_json TEXT NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY(email) REFERENCES users(email)
);

CREATE TABLE IF NOT EXISTS payments (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  plan TEXT NOT NULL,
  amount INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'KZT',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at INTEGER NOT NULL,
  confirmed_at INTEGER,
  FOREIGN KEY(email) REFERENCES users(email)
);
`);

module.exports = db;
