import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { generateChartData } from '@utils/filterManager';
import { DebitoReduxModel } from '../../models/redux/DebitoReduxModel';

//LB
import { getYear } from 'date-fns';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Models
import { GastoModel } from '@models/GastoModel';
import { DevedorModel } from '@models/DevedorModel';
import { CartaoModel } from '@models/CartaoModel';

interface RemoveDebtPayload {
  index: number;
}

interface FilterByPayload {
  filter: 'mes' | 'devedor' | 'cartao' | 'compra';
  year?: number;
}

interface EditDebtPayload {
  originalDebt: GastoModel;
  editedDebt: GastoModel;
}

interface DebtFilterPayload {
  data: [string, GastoModel[]][];
}

const initialState: DebitoReduxModel = {
  filteringBy: 'mes',
  debtsList: [],
  debtsFilter: [],
  devedorList: [],
  cartoesList: [],
  chartData: [],
};

export const debtSlice = createSlice({
  name: 'debt',
  initialState,
  reducers: {
    //Debts
    addDebt: (state, action: PayloadAction<GastoModel[]>) => {
      let newDebts = [...state.debtsList, ...action.payload];
      state.debtsList = newDebts;
      state.chartData = generateChartData(newDebts, getYear(new Date()));
    },
    removeDebt: (state, action: PayloadAction<RemoveDebtPayload>) => {
      let newDebts = [...state.debtsList].slice(action.payload.index, 1);
      state.debtsList = newDebts;
    },
    editDebt: (state, action: PayloadAction<EditDebtPayload>) => {
      let index = _.findIndex(state.debtsList, {
        id: action.payload.originalDebt.id,
      });
      let withEditedDebit = [...state.debtsList];
      withEditedDebit[index] = action.payload.editedDebt;
      state.debtsList = withEditedDebit;
    },
    setDebtFilter: (state, action: PayloadAction<DebtFilterPayload>) => {
      state.debtsFilter = action.payload.data;
    },
    setInitialStateOnRedux: (state, action) => {
      state.debtsList = action.payload.debtsList;
      state.devedorList = action.payload.devedorList;
      state.chartData = generateChartData(
        action.payload.debtsList,
        getYear(new Date()),
      );
    },
    filterBy: (state, action: PayloadAction<FilterByPayload>) => {
      const year = action.payload.year
        ? action.payload.year
        : getYear(new Date());
      const debtsFromCurrentYear = _.filter(state.debtsList, { ano: year });
      const myGroup = _.groupBy(debtsFromCurrentYear, action.payload.filter);
      const listOfItens: [string, GastoModel[]][] = _.toPairs(myGroup);
      state.debtsFilter = listOfItens;
      state.filteringBy = action.payload.filter;
    },
    setYearChart: (state, action) => {
      state.chartData = generateChartData(state.debtsList, action.payload);
    },
    addDevedor: (state, action: PayloadAction<DevedorModel>) => {
      let comNovoDevedor = [...state.devedorList, action.payload];
      let stringListaDevedor = JSON.stringify(comNovoDevedor);
      AsyncStorage.setItem('@devedores', stringListaDevedor);
      state.devedorList = comNovoDevedor;
    },
    addCartao: (state, action: PayloadAction<CartaoModel>) => {
      let comNovoCartao = [...state.cartoesList, action.payload];
      let stringListCartoes = JSON.stringify(comNovoCartao);
      AsyncStorage.setItem('@cartoes', stringListCartoes);
      state.cartoesList = comNovoCartao;
    },
  },
});

export const {
  addDebt,
  removeDebt,
  setDebtFilter,
  setInitialStateOnRedux,
  editDebt,
  filterBy,
  setYearChart,
  addDevedor,
  addCartao,
} = debtSlice.actions;
export const selectDebts = (state: RootState) => state.debts;

export default debtSlice.reducer;
