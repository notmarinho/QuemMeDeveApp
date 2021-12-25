import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { iUserState } from './types';
import { singUp, singIn } from './thunkUser';

const initialState: iUserState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
      state.userInfo = action.payload;
    },
    clearUser: state => {
      state.userInfo = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(singIn.pending, state => {
      state.loading = true;
    });
    builder.addCase(singIn.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    });
    builder.addCase(singIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
    builder.addCase(singUp.pending, state => {
      state.loading = true;
    });
    builder.addCase(singUp.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    });
    builder.addCase(singUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
