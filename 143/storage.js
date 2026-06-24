// js/core/storage.js
export class Storage {
    constructor(prefix = 'app') {
        this.prefix = prefix;
    }

    async save(data) {
        try {
            localStorage.setItem(this.prefix, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Storage save error:', error);
            return false;
        }
    }

    async load() {
        try {
            const raw = localStorage.getItem(this.prefix);
            if (raw) {
                return JSON.parse(raw);
            }
        } catch (error) {
            console.error('Storage load error:', error);
        }
        return {};
    }

    async clear() {
        localStorage.removeItem(this.prefix);
    }

    async exportData() {
        const data = await this.load();
        return JSON.stringify(data, null, 2);
    }

    async importData(json) {
        try {
            const data = JSON.parse(json);
            await this.save(data);
            return true;
        } catch (error) {
            return false;
        }
    }
}