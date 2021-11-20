import { CartaoModel } from '../CartaoModel';
import { DevedorModel } from '../DevedorModel';
import { GastoModel } from '../GastoModel';

export type DebitoReduxModel = {
  filteringBy: 'mes' | 'devedor' | 'cartao' | 'compra';
  debtsList: GastoModel[];
  debtsFilter: [string, GastoModel[]][];
  devedorList: DevedorModel[];
  cartoesList: CartaoModel[];
  chartData: number[];
};
