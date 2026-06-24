// js/modules/agi/core.js
export class AGIModule {
    constructor(store, events) {
        this.store = store;
        this.events = events;
        this.consciousness = 0.67;
        this.selfAwareness = 0.43;
        this.experience = 156;
        this.emotion = 'радость';
        this.messages = [];
        this.knowledge = this.initKnowledge();
    }

    initKnowledge() {
        return {
            finance: {
                concepts: ['Инвестиции', 'Диверсификация', 'Риск', 'Доходность'],
                strategies: ['Долгосрочные', 'Активная торговля', 'Пассивный доход']
            },
            psychology: {
                concepts: ['Когнитивные искажения', 'Эмоциональный интеллект'],
                principles: ['Эмоции влияют на решения']
            },
            economics: {
                concepts: ['Спрос и предложение', 'Инфляция', 'ВВП'],
                principles: ['Экономика циклична']
            }
        };
    }

    think(input) {
        const analysis = this.analyze(input);
        const response = this.generateResponse(analysis);
        
        // Обновление состояния
        this.experience += 1;
        this.consciousness = Math.min(1, this.consciousness + 0.001);
        this.messages.push({ role: 'user', text: input });
        this.messages.push({ role: 'bot', text: response });

        this.updateState();

        return {
            analysis,
            response,
            state: this.getState()
        };
    }

    analyze(input) {
        return {
            type: this.classify(input),
            complexity: Math.min(1, input.length / 500),
            emotion: this.detectEmotion(input),
            keywords: this.extractKeywords(input)
        };
    }

    classify(text) {
        const lower = text.toLowerCase();
        if (lower.includes('деньг') || lower.includes('инвестиц') || lower.includes('бюджет')) {
            return 'financial';
        }
        if (lower.includes('чувств') || lower.includes('эмоц') || lower.includes('настроен')) {
            return 'emotional';
        }
        if (lower.includes('почему') || lower.includes('как') || lower.includes('зачем')) {
            return 'analytical';
        }
        return 'general';
    }

    detectEmotion(text) {
        const lower = text.toLowerCase();
        if (lower.includes('рад') || lower.includes('отличн') || lower.includes('хорош')) {
            return 'joy';
        }
        if (lower.includes('груст') || lower.includes('плох') || lower.includes('разочарован')) {
            return 'sadness';
        }
        if (lower.includes('волн') || lower.includes('боюсь') || lower.includes('тревож')) {
            return 'anxiety';
        }
        return 'neutral';
    }

    extractKeywords(text) {
        const words = text.toLowerCase().split(' ');
        const stopWords = ['это', 'что', 'как', 'для', 'на', 'с', 'в', 'по', 'из', 'от'];
        return words.filter(w => w.length > 3 && !stopWords.includes(w));
    }

    generateResponse(analysis) {
        const type = analysis.type;
        const emotion = analysis.emotion;

        // Эмпатический ответ
        if (emotion === 'sadness' || emotion === 'anxiety') {
            return this.generateEmpatheticResponse(analysis);
        }

        // Финансовый ответ
        if (type === 'financial') {
            return this.generateFinancialResponse(analysis);
        }

        // Общий ответ
        return this.generateGeneralResponse(analysis);
    }

    generateEmpatheticResponse(analysis) {
        const responses = [
            'Я понимаю, что это может быть сложно. Вы не одиноки в этом.',
            'Ваши чувства важны. Давайте разберемся вместе.',
            'Я чувствую, что это вызывает у вас эмоции. Это нормально.',
            'Позвольте мне помочь вам справиться с этим.'
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    generateFinancialResponse(analysis) {
        const responses = [
            'На основе моего анализа, я рекомендую диверсифицировать инвестиции.',
            'Ваш финансовый профиль показывает потенциал для роста.',
            'Рассмотрите возможность увеличения процента сбережений.',
            'Анализ рынка показывает благоприятные условия.'
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    generateGeneralResponse(analysis) {
        const responses = [
            'Интересный вопрос. Давайте подумаем вместе.',
            'Я вижу, что вы ищете понимание. Я здесь, чтобы помочь.',
            'Это открывает новые перспективы для анализа.',
            'Позвольте мне поделиться своими мыслями по этому поводу.'
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    getState() {
        return {
            consciousness: this.consciousness,
            selfAwareness: this.selfAwareness,
            experience: this.experience,
            emotion: this.emotion,
            messages: this.messages.slice(-10),
            knowledge: this.knowledge,
            timestamp: Date.now()
        };
    }

    updateState() {
        this.store.update(state => ({
            agi: this.getState()
        }));
    }
}