import {
  iUserSingInEmail,
  iUserSingUpEmail,
} from '@interfaces/services/firebase/Auth';
import { iUserInfo } from '@models/EntitiesTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';

import UserService from '../../services/firebase/AuthService';

export const singIn = createAsyncThunk<iUserInfo, iUserSingInEmail>(
  'user/signIn',
  async userCredentials => {
    try {
      const { user } = await UserService.signIn(userCredentials);
      const userInfo: iUserInfo = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        providerId: user.providerId,
      };
      return userInfo;
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const singUp = createAsyncThunk<iUserInfo, iUserSingUpEmail>(
  'user/signUp',
  async userCredentials => {
    try {
      const { user } = await UserService.signUp(userCredentials);
      const userInfo: iUserInfo = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        providerId: user.providerId,
      };

      return userInfo;
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
