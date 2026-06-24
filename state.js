// js/core/state.js
export class Store {
    constructor(initialState = {}) {
        this.state = initialState;
        this.listeners = [];
        this.history = [];
        this.maxHistory = 100;
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        // Сохраняем в историю
        this.history.push(JSON.stringify(this.state));
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }

        // Мержим
        this.state = { ...this.state, ...newState };
        this.notify();
    }

    update(updater) {
        const newState = updater(this.state);
        this.setState(newState);
    }

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }

    undo() {
        if (this.history.length === 0) return;
        const prevState = JSON.parse(this.history.pop());
        this.state = prevState;
        this.notify();
    }
}