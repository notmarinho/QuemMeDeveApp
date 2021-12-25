import { CartaoModel } from './CartaoModel';
import { iDevedorModel } from './iDevedorModel';

export type GastoModel = {
  id: string | number[];
  idParcela: string | number[];
  userId: number;
  parcela: number;
  ano: number;
  createdAt: number;
  devedor: iDevedorModel;
  valorTotal: number;
  totalParcelas: number;
  compra: string;
  valorParcela: number;
  cartao: CartaoModel;
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
};
