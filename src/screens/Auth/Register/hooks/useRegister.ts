import useFirebase from '@services/hooks/useFirebase';
import { useState } from 'react';

export interface iRegisterFields {
  name: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const { loading, signUp } = useFirebase();
  const handleRegister = (user: iRegisterFields) => {
    console.log(user);
  };

  return {
    handleRegister,
  };
};

export default useRegister;
