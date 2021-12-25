import { CartaoModel } from '../CartaoModel';
import { iDevedorModel } from '../iDevedorModel';
import { GastoModel } from '../GastoModel';

export type DebitoReduxModel = {
  filteringBy: 'mes' | 'devedor' | 'cartao' | 'compra';
  debtsList: GastoModel[];
  debtsFilter: [string, GastoModel[]][];
  devedorList: iDevedorModel[];
  cartoesList: CartaoModel[];
  chartData: number[];
};
