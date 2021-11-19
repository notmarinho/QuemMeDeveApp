import { IGasto } from '@interfaces/IMainInterfaces';

export default class Gasto implements IGasto {
  id: string | number[];
}

// id: string | number[],
// idParcela: string | number[],
// userId: number,
// parcela: number,
// ano: number,
// createdAt: number,
// devedor: string,
// valorTotal: number,
// totalParcelas: number,
// compra: string,
// valorParcela: number,
// cartao: string,
// mes:
//   | 'JANEIRO'
//   | 'FEVEREIRO'
//   | 'MARÇO'
//   | 'ABRIL'
//   | 'MAIO'
//   | 'JUNHO'
//   | 'JULHO'
//   | 'AGOSTO'
//   | 'SETEMBRO'
//   | 'OUTUBRO'
//   | 'NOVEMBRO'
//   | 'DEZEMBRO',
// picture?: string,
