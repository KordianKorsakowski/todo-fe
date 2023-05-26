import { AuthInterface } from '../types/types';
import { AuthFormConfig } from './AuthFormConfig';
import { AuthFormLogic } from './AuthFormLogic';

const AuthForm = () => {
  const initialValues: AuthInterface = {
    email: '',
    password: '',
  };
  return (
    <>
      <AuthFormConfig initialValues={initialValues}>
        <AuthFormLogic />
      </AuthFormConfig>
    </>
  );
};

export default AuthForm;