// js/modules/transactions/parser.js
export class TransactionParser {
    constructor() {
        this.incomeKeywords = ['зарплат', 'зп', 'доход', 'премия', 'аванс', 'кешбэк', 'возврат', 'пополнение', 'пришло',
            'приход'
        ];
        
        this.categories = {
            'Еда': ['кофе', 'обед', 'еда', 'продукт', 'ресторан', 'суши', 'доставк', 'пицц', 'бургер'],
            'Транспорт': ['такси', 'бензин', 'заправк', 'транспорт', 'метро', 'авто', 'машина'],
            'Развлечения': ['кино', 'игр', 'подписк', 'развлеч', 'бар', 'клуб', 'концерт'],
            'Жильё': ['квартир', 'аренд', 'коммун', 'жкх', 'коммунал', 'интернет', 'свет'],
            'Образование': ['курс', 'книг', 'образован', 'тренинг', 'вебинар'],
            'Инвестиции': ['инвест', 'акци', 'облигац', 'фонд', 'вклад'],
            'Крипта': ['битко', 'крипт', 'eth', 'btc', 'токен'],
            'Здоровье': ['аптек', 'лекарств', 'врач', 'больниц', 'стоматолог'],
            'Одежда': ['одежд', 'обув', 'куртк', 'джинс', 'футболк']
        };
    }

    parse(text) {
        text = text.trim();
        const numbers = text.match(/\d+[\s\d]*/g);
        if (!numbers) return null;

        const amountStr = numbers[0].replace(/\s/g, '');
        const amount = parseInt(amountStr, 10);
        if (isNaN(amount) || amount <= 0) return null;

        let description = text.replace(/\d+[\s\d]*/g, '').trim();
        if (!description) description = 'Покупка';

        const lower = description.toLowerCase();
        let type = 'expense';
        let category = 'Прочее';

        // Проверка на доход
        for (const kw of this.incomeKeywords) {
            if (lower.includes(kw)) {
                type = 'income';
                category = 'Доход';
                break;
            }
        }

        // Проверка на категорию
        if (type === 'expense') {
            for (const [cat, keywords] of Object.entries(this.categories)) {
                for (const kw of keywords) {
                    if (lower.includes(kw)) {
                        category = cat;
                        break;
                    }
                }
                if (category !== 'Прочее') break;
            }
        }

        return {
            text: description.charAt(0).toUpperCase() + description.slice(1),
            amount,
            type,
            category,
            date: Date.now()
        };
    }
}