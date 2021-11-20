export const toCurrency = (value: number) => {
  return (
    'R$ ' +
    value
      .toFixed(2) // casas decimais
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  );
};

export const capitalize = (string: string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export function currencyFormat(num: number) {
  return (
    'R$ ' +
    num
      .toFixed(2) // casas decimais
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  );
}

export function capitalizeFirstLetter(string: string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return '';
}

export const allMonths = [
  'Janeiro',
  'Fevereiro',
  'Marco',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
