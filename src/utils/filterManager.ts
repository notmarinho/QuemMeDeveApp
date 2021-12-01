import _ from 'lodash';

import { allMonths } from './auxFunctions';
import { GastoModel } from '@models/GastoModel';

enum MesesAno {
  JANEIRO,
  FEVEREIRO,
  MARÇO,
  ABRIL,
  MAIO,
  JUNHO,
  JULHO,
  AGOSTO,
  SETEMBRO,
  OUTUBRO,
  NOVEMBRO,
  DEZEMBRO,
}

type MesesAnoStrings = keyof typeof MesesAno;

export const filterDebts = (
  list: GastoModel[],
  field: 'mes' | 'devedor' | 'cartao' | 'compra',
) => {
  const myGroup = _.groupBy(list, field);
  const listOfItens: [string, GastoModel[]][] = _.toPairs(myGroup);
  return listOfItens;
};

export const getComprasDevedor = (compras: GastoModel[], idDevedor: string) => {
  const todasComprasDevedor = _.filter(compras, compra => {
    return compra.devedor.id === idDevedor;
  });
  return todasComprasDevedor;
};

export const getComprasDevedorMes = (
  comprasDevedor: GastoModel[],
  mes: MesesAnoStrings,
  ano: number,
) => {
  const comprasMes = _.filter(comprasDevedor, compra => {
    return compra.mes === mes && compra.ano === ano;
  });
  const valorTotalMes = _.sumBy(comprasMes, compra => {
    return compra.valorParcela;
  });
  return {
    comprasMes,
    valorTotalMes,
  };
};

export const generateChartData = (
  list: GastoModel[],
  year: number,
): number[] => {
  const chartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const myYears = _.groupBy(list, 'ano');
  const myMonths = _.groupBy(myYears[`${year}`], 'mes');
  for (const month of allMonths) {
    if (myMonths[month]) {
      let index = monthIndex(month);
      let monthSum = _.sumBy(myMonths[month], 'valorParcela');
      chartData[index] = monthSum;
    } else {
      let index = monthIndex(month);
      chartData[index] = 0;
    }
  }
  console.log(chartData);

  return chartData;
};

export const monthIndexNumber = (index: any) => {
  switch (index) {
    case 0:
      return 'Janeiro';
    case 1:
      return 'Fevereiro';
    case 2:
      return 'Marco';
    case 3:
      return 'Abril';
    case 4:
      return 'Maio';
    case 5:
      return 'Junho';
    case 6:
      return 'Julho';
    case 7:
      return 'Agosto';
    case 8:
      return 'Setembro';
    case 9:
      return 'Outubro';
    case 10:
      return 'Novembro';
    case 11:
      return 'Dezembro';
  }
};

export const monthIndex = (month: string) => {
  switch (month) {
    case 'Janeiro':
      return 0;
    case 'Fevereiro':
      return 1;
    case 'Marco':
      return 2;
    case 'Abril':
      return 3;
    case 'Mario':
      return 4;
    case 'Junho':
      return 5;
    case 'Julho':
      return 6;
    case 'Agosto':
      return 7;
    case 'Setembro':
      return 8;
    case 'Outubro':
      return 9;
    case 'Novembro':
      return 10;
    case 'Dezembro':
      return 11;
    default:
      return 0;
  }
};
