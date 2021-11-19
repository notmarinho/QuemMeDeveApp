export interface IGasto {
  id: string | number[];
  idParcela: string | number[];
  userId: number;
  parcela: number;
  ano: number;
  createdAt: number;
  devedor: string;
  valorTotal: number;
  totalParcelas: number;
  compra: string;
  valorParcela: number;
  cartao: string;
  mes:
    | 'JANEIRO'
    | 'FEVEREIRO'
    | 'MARÇO'
    | 'ABRIL'
    | 'MAIO'
    | 'JUNHO'
    | 'JULHO'
    | 'AGOSTO'
    | 'SETEMBRO'
    | 'OUTUBRO'
    | 'NOVEMBRO'
    | 'DEZEMBRO';
  picture?: string;
}

export interface Debet {
  value: number;
  card: string;
  description: string;
}

export interface ICartao {
  nome: string;
  cor: string;
}

export interface IDevedor {
  nome: string;
}

export interface IDetalheGasto {
  valorTotal: number;
  totalParcela: number;
  valorParcela: string;
  descricao: string;
}

export interface IReduxState {
  filteringBy: 'mes' | 'devedor' | 'cartao' | 'compra';
  debtsList: IGasto[];
  debtsFilter: [string, IGasto[]][];
  devedorList: IDevedor[];
  cartoesList: ICartao[];
  chartData: number[];
}
