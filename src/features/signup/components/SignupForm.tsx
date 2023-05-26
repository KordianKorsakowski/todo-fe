import {SignupInterface } from '../types/types';
import { SignupFormConfig } from './SignupFormConfig';
import { SignupFormLogic } from './SignupFormLogic';

export const SignupForm = () => {
  const initialValues: SignupInterface = {
    email: '',
    password: '',
  };
  return (
    <>
      <SignupFormConfig initialValues={initialValues}>
        <SignupFormLogic />
      </SignupFormConfig>
    </>
  );
};
