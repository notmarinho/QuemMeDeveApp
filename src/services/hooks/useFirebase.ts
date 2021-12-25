import {
  iUserSingInEmail,
  iUserSingUpEmail,
} from '@interfaces/services/firebase/Auth';
import AuthService from '@services/firebase/AuthService';
import { useAppDispatch } from '../../hooks';
import { useState } from 'react';
import { setUser } from '../../feature/user/userSlice';

const useFirebase = () => {
  const [loading, setLoading] = useState(false);

  const finishLoading = () => setLoading(false);

  const dispatch = useAppDispatch();

  const getUserCredentials = async (credentials: iUserSingInEmail) => {
    setLoading(true);
    try {
      const fetchedUser = await AuthService.signIn(credentials).finally(
        finishLoading,
      );
      return fetchedUser;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const signIn = async (credentials: iUserSingInEmail) => {
    setLoading(true);
    try {
      const fetchedUser = await AuthService.signIn(credentials)
        .then(userCredential => {
          dispatch(setUser(userCredential.user));
          return userCredential;
        })
        .finally(finishLoading);
      return fetchedUser;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const signUp = async (credentials: iUserSingUpEmail) => {
    setLoading(true);
    try {
      const newUser = await AuthService.signUp(credentials)
        .then(userCredential => {
          dispatch(setUser(userCredential.user));
          return userCredential;
        })
        .finally(finishLoading);
      return newUser;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const isUserSignedIn = async (): Promise<boolean> => {
    try {
      return await AuthService.checkUserSinged();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logOut = async (): Promise<boolean> => {
    try {
      return await AuthService.logout();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    getUserCredentials,
    isUserSignedIn,
    loading,
    signUp,
    logOut,
    signIn,
  };
};

export default useFirebase;
