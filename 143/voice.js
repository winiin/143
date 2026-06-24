// js/plugins/voice.js
export class VoicePlugin {
    constructor() {
        this.isListening = false;
        this.recognition = null;
        this.callbacks = [];
        this.init();
    }

    init() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SR();
            this.recognition.lang = 'ru-RU';
            this.recognition.continuous = false;
            this.recognition.interimResults = false;

            this.recognition.onresult = (event) => {
                const text = event.results[0][0].transcript;
                this.callbacks.forEach(cb => cb(text));
                this.isListening = false;
            };

            this.recognition.onerror = () => {
                this.isListening = false;
                this.callbacks.forEach(cb => cb(null));
            };
        }
    }

    start(callback) {
        if (!this.recognition) {
            callback('❌ Голосовой ввод не поддерживается');
            return;
        }

        if (this.isListening) {
            this.recognition.stop();
            this.isListening = false;
            return;
        }

        this.callbacks.push(callback);
        this.recognition.start();
        this.isListening = true;
    }

    stop() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
            this.isListening = false;
        }
    }
}