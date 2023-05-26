import { LoginFormWrapper } from '../style/LoginFormStyles.styles';
import { LoginInterface } from '../types/types';
import { LoginFormConfig } from './LoginFormConfig';
import { LoginFormLogic } from './LoginFormLogic';

export const LoginForm = () => {
  const initialValues: LoginInterface = {
    email: '',
    password: '',
  };
  return (
    <LoginFormWrapper>
      <LoginFormConfig initialValues={initialValues}>
        <LoginFormLogic />
      </LoginFormConfig>
    </LoginFormWrapper>
  );
};
