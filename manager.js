// js/modules/transactions/manager.js
import { TransactionParser } from './parser.js';

export class TransactionModule {
    constructor(store, events) {
        this.store = store;
        this.events = events;
        this.parser = new TransactionParser();
    }

    add(raw) {
        const parsed = this.parser.parse(raw);
        if (!parsed) {
            return { success: false, error: 'Не удалось распознать' };
        }

        const state = this.store.getState();
        const transactions = state.transactions || [];
        const newTransaction = {
            id: Date.now(),
            ...parsed
        };

        this.store.setState({
            transactions: [newTransaction, ...transactions]
        });

        this.events.emit('transaction:added', newTransaction);
        this.events.emit('data:changed');

        return { success: true, data: newTransaction };
    }

    delete(id) {
        const state = this.store.getState();
        const transactions = state.transactions || [];
        const filtered = transactions.filter(t => t.id !== id);

        this.store.setState({ transactions: filtered });
        this.events.emit('transaction:deleted', id);
        this.events.emit('data:changed');

        return { success: true };
    }

    update(id, updates) {
        const state = this.store.getState();
        const transactions = state.transactions || [];
        const index = transactions.findIndex(t => t.id === id);

        if (index === -1) {
            return { success: false, error: 'Транзакция не найдена' };
        }

        const updated = { ...transactions[index], ...updates };
        transactions[index] = updated;

        this.store.setState({ transactions });
        this.events.emit('transaction:updated', updated);
        this.events.emit('data:changed');

        return { success: true, data: updated };
    }

    getAll(filter = {}) {
        const state = this.store.getState();
        const transactions = state.transactions || [];

        let filtered = transactions;

        if (filter.type) {
            filtered = filtered.filter(t => t.type === filter.type);
        }

        if (filter.category) {
            filtered = filtered.filter(t => t.category === filter.category);
        }

        if (filter.startDate) {
            filtered = filtered.filter(t => t.date >= filter.startDate);
        }

        if (filter.endDate) {
            filtered = filtered.filter(t => t.date <= filter.endDate);
        }

        return filtered;
    }

    getStats() {
        const transactions = this.getAll();
        const totalIncome = transactions.filter(t => t.type === 'income')
            .reduce((s, t) => s + t.amount, 0);
        const totalExpense = transactions.filter(t => t.type === 'expense')
            .reduce((s, t) => s + t.amount, 0);

        const categories = {};
        transactions.filter(t => t.type === 'expense').forEach(t => {
            categories[t.category] = (categories[t.category] || 0) + t.amount;
        });

        return {
            totalIncome,
            totalExpense,
            balance: totalIncome - totalExpense,
            categories,
            count: transactions.length
        };
    }
}