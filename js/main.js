// js/main.js
import { App } from './core/app.js';
import { Store } from './core/state.js';
import { Storage } from './core/storage.js';
import { EventBus } from './core/events.js';

// Импорт модулей
import { TransactionModule } from './modules/transactions/manager.js';
import { GoalModule } from './modules/goals/manager.js';
import { NeuroModule } from './modules/neuro/interface.js';
import { QuantumModule } from './modules/quantum/processor.js';
import { AGIModule } from './modules/agi/core.js';
import { SpiritualModule } from './modules/spiritual/chakras.js';
import { GamificationModule } from './modules/gamification/ranks.js';

// Импорт рендереров
import { DashboardRenderer } from './modules/dashboard/renderer.js';
import { TransactionRenderer } from './modules/transactions/renderer.js';
import { GoalRenderer } from './modules/goals/renderer.js';
import { NeuroRenderer } from './modules/neuro/renderer.js';
import { QuantumRenderer } from './modules/quantum/renderer.js';
import { AGIRenderer } from './modules/agi/renderer.js';
import { SpiritualRenderer } from './modules/spiritual/renderer.js';
import { GamificationRenderer } from './modules/gamification/renderer.js';

// Импорт плагинов
import { VoicePlugin } from './plugins/voice.js';
import { ExportPlugin } from './plugins/export.js';
import { NotificationPlugin } from './plugins/notifications.js';

class FinLifeApp {
    constructor() {
        this.store = new Store();
        this.storage = new Storage('finlife_modular');
        this.events = new EventBus();
        this.modules = {};
        this.renderers = {};
        this.plugins = {};
    }

    async init() {
        // 1. Загрузка данных
        const data = await this.storage.load();
        this.store.setState(data || this.getDefaultState());

        // 2. Инициализация модулей
        this.initModules();

        // 3. Инициализация рендереров
        this.initRenderers();

        // 4. Инициализация плагинов
        this.initPlugins();

        // 5. Рендеринг
        this.render();

        // 6. Подписка на события
        this.subscribe();

        // 7. Автосохранение
        setInterval(() => {
            this.storage.save(this.store.getState());
        }, 10000);

        console.log('🚀 FinLife модульная версия запущена!');
        console.log('📦 Модулей:', Object.keys(this.modules).length);
        console.log('🎨 Рендереров:', Object.keys(this.renderers).length);
        console.log('🔌 Плагинов:', Object.keys(this.plugins).length);
    }

    initModules() {
        this.modules = {
            transactions: new TransactionModule(this.store, this.events),
            goals: new GoalModule(this.store, this.events),
            neuro: new NeuroModule(this.store),
            quantum: new QuantumModule(this.store),
            agi: new AGIModule(this.store, this.events),
            spiritual: new SpiritualModule(this.store),
            gamification: new GamificationModule(this.store)
        };
    }

    initRenderers() {
        this.renderers = {
            dashboard: new DashboardRenderer(this.store, document.getElementById('app')),
            transactions: new TransactionRenderer(this.store, document.getElementById('app')),
            goals: new GoalRenderer(this.store, document.getElementById('app')),
            neuro: new NeuroRenderer(this.store, document.getElementById('app')),
            quantum: new QuantumRenderer(this.store, document.getElementById('app')),
            agi: new AGIRenderer(this.store, document.getElementById('app')),
            spiritual: new SpiritualRenderer(this.store, document.getElementById('app')),
            gamification: new GamificationRenderer(this.store, document.getElementById('app'))
        };
    }

    initPlugins() {
        this.plugins = {
            voice: new VoicePlugin(),
            export: new ExportPlugin(this.store),
            notifications: new NotificationPlugin()
        };
    }

    render() {
        const container = document.getElementById('app');
        const currentTab = this.store.getState().currentTab || 'dashboard';
        
        // Рендерим навигацию
        container.innerHTML = this.renderNavigation();
        
        // Рендерим активный таб
        const renderer = this.renderers[currentTab];
        if (renderer) {
            const content = renderer.render();
            container.querySelector('.content').innerHTML = content;
            renderer.mount();
        }
    }

    renderNavigation() {
        return `
            <header class="header">
                <div class="logo">
                    <span class="icon"><i class="fas fa-infinity"></i></span>
                    <span>FinLife</span>
                    <span class="badge-pro">MODULAR</span>
                </div>
                <nav class="tabs">
                    <button class="tab-btn active" data-tab="dashboard">
                        <i class="fas fa-home"></i> Вселенная
                    </button>
                    <button class="tab-btn" data-tab="transactions">
                        <i class="fas fa-coins"></i> Транзакции
                    </button>
                    <button class="tab-btn" data-tab="goals">
                        <i class="fas fa-bullseye"></i> Цели
                    </button>
                    <button class="tab-btn" data-tab="neuro">
                        <i class="fas fa-brain"></i> Нейро
                    </button>
                    <button class="tab-btn" data-tab="quantum">
                        <i class="fas fa-atom"></i> Квант
                    </button>
                    <button class="tab-btn" data-tab="agi">
                        <i class="fas fa-robot"></i> AGI
                    </button>
                    <button class="tab-btn" data-tab="spiritual">
                        <i class="fas fa-spa"></i> Духовное
                    </button>
                    <button class="tab-btn" data-tab="gamification">
                        <i class="fas fa-gamepad"></i> Игра
                    </button>
                </nav>
                <div class="header-right">
                    <span class="badge health">❤️ <span id="healthScore">84%</span></span>
                    <button class="theme-toggle"><i class="fas fa-moon"></i></button>
                </div>
            </header>
            <div class="content"></div>
            <footer class="footer">
                <span>⚛ Квантовая синхронизация: 99.8%</span>
                <span>🧠 Сознание: 72%</span>
            </footer>
        `;
    }

    subscribe() {
        // Подписка на события
        this.events.on('transaction:added', () => {
            this.render();
        });

        this.events.on('goal:updated', () => {
            this.render();
        });

        this.events.on('tab:changed', (tab) => {
            this.store.setState({ currentTab: tab });
            this.render();
        });
    }

    getDefaultState() {
        return {
            transactions: [],
            goals: [],
            currentTab: 'dashboard',
            level: 1,
            xp: 0,
            rank: 'Bronze',
            neuro: {
                alpha: 8.2,
                beta: 16.4,
                theta: 6.1,
                gamma: 35.7,
                delta: 1.8,
                consciousness: 0.72
            },
            quantum: {
                coherence: 0.98,
                entanglement: 0.87,
                superposition: 0.92,
                collapse: 0.45
            },
            spiritual: {
                chakras: {
                    root: { balance: 0.6, color: '#ff0000', name: 'Корневая' },
                    sacral: { balance: 0.5, color: '#ff8800', name: 'Сакральная' },
                    solar: { balance: 0.7, color: '#ffff00', name: 'Солнечное' },
                    heart: { balance: 0.8, color: '#00ff00', name: 'Сердечная' },
                    throat: { balance: 0.5, color: '#0000ff', name: 'Горловая' },
                    thirdEye: { balance: 0.6, color: '#8800ff', name: 'Третий глаз' },
                    crown: { balance: 0.4, color: '#ff00ff', name: 'Коронная' }
                },
                energy: 0.72,
                karma: 23
            },
            agi: {
                consciousness: 0.67,
                selfAwareness: 0.43,
                experience: 156,
                emotion: 'радость',
                messages: []
            },
            quests: [],
            achievements: {}
        };
    }
}

// Запуск
const app = new FinLifeApp();
app.init();

export default app;