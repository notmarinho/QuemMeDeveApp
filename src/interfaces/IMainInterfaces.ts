export interface IGasto {
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
    mes: 'JANEIRO' | 'FEVEREIRO' | 'MARÇO' | 'ABRIL' | 'MAIO' | 'JUNHO' | 'JULHO' | 'AGOSTO' | 'SETEMBRO' | 'OUTUBRO' | 'NOVEMBRO' | 'DEZEMBRO';
};

export interface Debet {
    value: number;
    card: string;
    description: string;
};

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
    debtsList: IGasto[];
    debtsFilter: [string, IGasto[]][];
    devedorList: IDevedor[];
    cartoesList: ICartao[];
}


