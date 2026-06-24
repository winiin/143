// js/modules/transactions/renderer.js
export class TransactionRenderer {
    constructor(store, container) {
        this.store = store;
        this.container = container;
        this.currentFilter = 'all';
    }

    render() {
        const state = this.store.getState();
        const transactions = state.transactions || [];
        const filtered = this.filterTransactions(transactions);

        return `
            <div class="module-transactions">
                <div class="card">
                    <div class="card-header">
                        <span class="card-title"><i class="fas fa-plus-circle"></i> Создать транзакцию</span>
                    </div>
                    <div class="input-group">
                        <input type="text" id="txInput" placeholder='Напр.: "Кофе 350" или "Зарплата 200к"' />
                        <button class="btn btn-green" id="txAddBtn"><i class="fas fa-plus"></i> Добавить</button>
                        <button class="btn btn-gold" id="txVoiceBtn"><i class="fas fa-microphone"></i> 🎙</button>
                    </div>
                    <div class="templates">
                        <button class="template" data-text="Кофе 350">☕ Кофе</button>
                        <button class="template" data-text="Обед 1500">🍽 Обед</button>
                        <button class="template" data-text="Такси 800">🚗 Такси</button>
                        <button class="template" data-text="Продукты 5000">🛒 Продукты</button>
                        <button class="template" data-text="Зарплата 200000">💰 ЗП</button>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <span class="card-title"><i class="fas fa-list-ul"></i> Все транзакции</span>
                        <div class="filters">
                            <button class="filter-btn active" data-filter="all">Все</button>
                            <button class="filter-btn" data-filter="income">Доходы</button>
                            <button class="filter-btn" data-filter="expense">Расходы</button>
                            <button class="filter-btn btn-red" id="clearBtn"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                    <div class="tx-list">
                        ${this.renderTransactions(filtered)}
                    </div>
                </div>
            </div>
        `;
    }

    renderTransactions(transactions) {
        if (transactions.length === 0) {
            return '<div class="empty">Нет транзакций</div>';
        }

        return transactions.slice(0, 20).reverse().map(t => `
            <div class="tx-item">
                <div class="left">
                    <div class="tx-icon ${t.type}">
                        <i class="fas fa-${t.type === 'income' ? 'arrow-down' : 'arrow-up'}"></i>
                    </div>
                    <span>${t.text}</span>
                    <span class="cat-tag">${t.category}</span>
                </div>
                <div class="amount ${t.type}">
                    ${t.type === 'income' ? '+' : '-'} ${t.amount.toLocaleString()} ₸
                </div>
            </div>
        `).join('');
    }

    filterTransactions(transactions) {
        if (this.currentFilter === 'all') return transactions;
        return transactions.filter(t => t.type === this.currentFilter);
    }

    mount() {
        // Добавление транзакции
        const addBtn = document.getElementById('txAddBtn');
        const input = document.getElementById('txInput');
        
        if (addBtn && input) {
            addBtn.addEventListener('click', () => {
                const val = input.value.trim();
                if (val) {
                    // Эмитим событие для модуля
                    window.dispatchEvent(new CustomEvent('transaction:add', { detail: val }));
                    input.value = '';
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    addBtn.click();
                }
            });
        }

        // Голос
        const voiceBtn = document.getElementById('txVoiceBtn');
        if (voiceBtn) {
            voiceBtn.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('voice:start'));
            });
        }

        // Шаблоны
        document.querySelectorAll('.template').forEach(btn => {
            btn.addEventListener('click', () => {
                const input = document.getElementById('txInput');
                if (input) input.value = btn.dataset.text;
            });
        });

        // Фильтры
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                window.dispatchEvent(new CustomEvent('render:transactions'));
            });
        });

        // Очистка
        const clearBtn = document.getElementById('clearBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (confirm('Удалить все транзакции?')) {
                    window.dispatchEvent(new CustomEvent('transaction:clear'));
                }
            });
        }
    }
}