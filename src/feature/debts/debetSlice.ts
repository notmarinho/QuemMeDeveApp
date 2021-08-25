import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IGasto, IReduxState, ICartao } from '@interfaces/IMainInterfaces'



interface removeDebt {
    index: number;
}

interface setDebtFilter {
    data: [string, IGasto[]][]
}

const initialState: IReduxState = {
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
        setDebtFilter: (state, action: PayloadAction<setDebtFilter>) => {
            state.debtsFilter = action.payload.data;
        },
        setInitialStateOnRedux: (state, action) => {
            state.debtsList = action.payload.debtsList;
        },
        //Card
        addCard: (state) => {

        },
        removeCard: (state, action) => {

        }
    }
})

export const { addDebt, removeDebt, setDebtFilter, setInitialStateOnRedux } = debtSlice.actions;
export const selectDebts = (state: RootState) => state.debts;

export default debtSlice.reducer;