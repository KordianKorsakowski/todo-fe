import { useFormikContext } from 'formik';
import { useState } from 'react';
import { LoginInterface } from '../types/types';
import { LoginFormBody } from './LoginFormBody';
import { loginAPI } from '../api/loginAPI';
import { SubmitBtn } from '../../../components/form/submitBtn/SubmitBtn';
import { routes } from '../../../routes';
import { useLogin } from '../../../containers/LoginContainer';
import { useRouter } from 'next/router';

export const LoginFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const {onClose} = useLogin()

  const { values, isValid, resetForm, setSubmitting, dirty } =
    useFormikContext<LoginInterface>();

  const submitHandler = async () => {
    setIsLoading(true);
    await loginAPI(values);
    setIsLoading(false);
    resetForm();
    router.push(routes.todo.todo);
    onClose();
  };

  return (
    <>
      <LoginFormBody
        submitButton={
          <SubmitBtn
            disabled={!(isValid && dirty)}
            submitFn={submitHandler}
            isLoading={isLoading}
            text={'Login'}
          />
        }
      />
    </>
  );
};
