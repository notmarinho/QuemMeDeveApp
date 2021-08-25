export const toCurrency = (value: number) => {
    return 'R$ ' + value.toFixed(2) // casas decimais
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export const capitalize = (string: string) => {
    return string[0].toUpperCase() + string.slice(1);
}

export function currencyFormat(num: number) {
    return 'R$ ' + num.toFixed(2) // casas decimais
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export const allMonths = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBO', 'DEZEMBRO']