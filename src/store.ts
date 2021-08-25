import { configureStore } from '@reduxjs/toolkit'
import debtReducer from './feature/debts/debetSlice';


export const store = configureStore({
    reducer: {
        debts: debtReducer,
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
