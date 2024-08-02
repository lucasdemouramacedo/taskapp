class Month {
    static months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    static abbreviatedMonths = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ];

    static get(month) {
        if (month < 0 || month > 11) {
            return 'Mês inválido';
        }
        return this.months[month];
    }

    static getShort(month) {
        if (month < 0 || month > 11) {
            return 'Mês inválido';
        }
        return this.abbreviatedMonths[month];
    }

    static getAll() {
        return [...this.months];
    }

    static getAllShort() {
        return [...this.abbreviatedMonths];
    }
}

export default Month