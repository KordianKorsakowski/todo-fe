import { useFormikContext } from 'formik';
import { useState } from 'react';
import { LoginInterface } from '../types/types';
import { LoginFormBody } from './LoginFormBody';
import { loginAPI } from '../api/loginAPI';
import { SubmitBtn } from '../../../components/form/submitBtn/SubmitBtn';

export const LoginFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { values, isValid, resetForm, setSubmitting, dirty } =
    useFormikContext<LoginInterface>();

  const submitHandler = async () => {
    setIsLoading(true);
    await loginAPI(values);
    setIsLoading(false);
    resetForm();
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
