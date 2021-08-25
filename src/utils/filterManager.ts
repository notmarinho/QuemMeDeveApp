import _ from 'lodash';
import { IGasto } from '@interfaces/IMainInterfaces'

import { allMonths } from './auxFunctions';


export const filterDebts = (list: IGasto[], field: string) => {
    const myGroup = _.groupBy(list, field);
    const listOfItens: [string, IGasto[]][] = _.toPairs(myGroup);
    return listOfItens;
}

export const generateChartData = (list: IGasto[], year: number): number[] => {
    const chartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const myYears = _.groupBy(list, 'ano');
    const myMonths = _.groupBy(myYears[`${year}`], 'mes')
    for (const month of allMonths) {
        if (myMonths[month]) {
            let index = monthIndex(month);
            let monthSum = _.sumBy(myMonths[month], 'valorParcela');
            chartData[index] = monthSum;
        } else {
            let index = monthIndex(month);
            chartData[index] = 0
        }
    }
    // if (semestre === 1) {
    //     let mesesSemestre = allMonths.slice(0, 6)
    //     console.log('Meses', mesesSemestre);
    //     return chartData.slice(0, 6)
    // } else {
    //     let mesesSemestre = allMonths.slice(5, 6)
    //     console.log('Meses', mesesSemestre);
    //     return chartData.slice(5, 6)
    // }
    return chartData;
}

export const monthIndexNumber = (index: any) => {
    switch (index) {
        case 0:
            return 'JANEIRO'
        case 1:
            return 'FEVEREIRO'
        case 2:
            return 'MARÇO'
        case 3:
            return 'ABRIL'
        case 4:
            return 'MAIO'
        case 5:
            return 'JUNHO'
        case 6:
            return 'JULHO'
        case 7:
            return 'AGOSTO'
        case 8:
            return 'SETEMBRO'
        case 9:
            return 'OUTUBRO'
        case 10:
            return 'NOVEMBRO'
        case 11:
            return 'DEZEMBRO'
        default:
            return 0;
    }
}

export const monthIndex = (month: string) => {
    switch (month) {
        case 'JANEIRO':
            return 0;
        case 'FEVEREIRO':
            return 1;
        case 'MARÇO':
            return 2;
        case 'ABRIL':
            return 3;
        case 'MAIO':
            return 4;
        case 'JUNHO':
            return 5;
        case 'JULHO':
            return 6
        case 'AGOSTO':
            return 7;
        case 'SETEMBRO':
            return 8;
        case 'OUTUBRO':
            return 9;
        case 'NOVEMBRO':
            return 10;
        case 'DEZEMBRO':
            return 11;
        default:
            return 0
    }
}