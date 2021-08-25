import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { filterDebts } from '@utils/filterManager';
import { IGasto, IReduxState, ICartao } from '@interfaces/IMainInterfaces'
import _ from 'lodash';

interface removeDebt {
    index: number;
}

interface IFilterBy {
    filter: 'mes' | 'devedor' | 'cartao' | 'compra'
}

interface IEditDebit {
    originalDebt: IGasto;
    editedDebt: IGasto;
}

interface setDebtFilter {
    data: [string, IGasto[]][]
}

const initialState: IReduxState = {
    filteringBy: 'mes',
    debtsList: [],
    debtsFilter: [],
    devedorList: [],
    cartoesList: []
}

export const debtSlice = createSlice({
    name: 'debt',
    initialState,
    reducers: {
        //Debts
        addDebt: (state, action: PayloadAction<IGasto[]>) => {
            let newDebts = [...state.debtsList, ...action.payload];
            state.debtsList = newDebts;
        },
        removeDebt: (state, action: PayloadAction<removeDebt>) => {
            let newDebts = [...state.debtsList].slice(action.payload.index, 1);
            state.debtsList = newDebts;
        },
        editDebt: (state, action: PayloadAction<IEditDebit>) => {
            let index = _.findIndex(state.debtsList, { id: action.payload.originalDebt.id })
            let withEditedDebit = [...state.debtsList];
            withEditedDebit[index] = action.payload.editedDebt;
            state.debtsList = withEditedDebit;
        },
        setDebtFilter: (state, action: PayloadAction<setDebtFilter>) => {
            state.debtsFilter = action.payload.data;
        },
        setInitialStateOnRedux: (state, action) => {
            state.debtsList = action.payload.debtsList;
        },
        filterBy: (state, action: PayloadAction<IFilterBy>) => {
            const myGroup = _.groupBy(state.debtsList, action.payload.filter);
            const listOfItens: [string, IGasto[]][] = _.toPairs(myGroup);
            state.debtsFilter = listOfItens;
            state.filteringBy = action.payload.filter;
        },
        //Card
        addCard: (state) => {

        },
        removeCard: (state, action) => {

        },

    }
})

export const {
    addDebt,
    removeDebt,
    setDebtFilter,
    setInitialStateOnRedux,
    editDebt,
    filterBy
} = debtSlice.actions;
export const selectDebts = (state: RootState) => state.debts;

export default debtSlice.reducer;