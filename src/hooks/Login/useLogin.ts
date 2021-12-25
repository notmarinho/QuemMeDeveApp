import useFirebase from '@services/hooks/useFirebase';
// import { useState } from 'react';

const useLogin = () => {
  const { getUserCredentials, loading, userCredentials } = useFirebase();

  return {
    loading,
    getUserCredentials,
    userCredentials,
  };
};

export default useLogin;
