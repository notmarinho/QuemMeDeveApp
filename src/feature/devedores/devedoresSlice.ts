import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iDevedor } from '@models/EntitiesTypes';
import _ from 'lodash';

export type iUserStore = {
  devedores: iDevedor[];
};

const initialState: iUserStore = {
  devedores: [],
};

export const devedoresSlice = createSlice({
  name: 'devedores',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<iDevedor>) => {
      const oldDevedores = [...state.devedores];
      state.devedores = [...oldDevedores, action.payload];
    },
    remove: (state, action: PayloadAction<iDevedor>) => {
      const removedDevedor = _.remove(state.devedores, e => {
        return e !== action.payload;
      });
      state.devedores = removedDevedor;
    },
    edit: (state, action: PayloadAction<iDevedor>) => {
      const index = _.findIndex(state.devedores, { id: action.payload.id });
      const instancedList = [...state.devedores];
      instancedList[index] = action.payload;
      state.devedores = instancedList;
    },
  },
});

export const { add, edit, remove } = devedoresSlice.actions;

export default devedoresSlice.reducer;
