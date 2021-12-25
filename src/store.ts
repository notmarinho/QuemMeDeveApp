import { configureStore } from '@reduxjs/toolkit';
import debtReducer from './feature/debts/debetSlice';
import userReducer from './feature/user/userSlice';
import devedoresReducer from './feature/devedores/devedoresSlice';

export const store = configureStore({
  reducer: {
    debts: debtReducer,
    user: userReducer,
    devedores: devedoresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
