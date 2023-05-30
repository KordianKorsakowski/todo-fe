import { useFormikContext } from 'formik';
import { useState } from 'react';
import { SignupInterface } from '../types/types';
import { SignupFormBody } from './SignupFormBody';
import { SignupUserAPI } from '../api/signupUserAPI';
import { SubmitBtn } from '../../../components/form/submitBtn/SubmitBtn';
import { useRouter } from 'next/router';
import { routes } from '../../../routes';
import { useLogin } from '../../../containers/LoginContainer';

export const SignupFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { onOpen } = useLogin();
  const router = useRouter();
  const { values, isValid, resetForm, setSubmitting, dirty } =
    useFormikContext<SignupInterface>();

  const submitHandler = async () => {
    setIsLoading(true);
    await SignupUserAPI(values);
    setIsLoading(false);
    resetForm();
    router.push(routes.home.home);
    onOpen();
  };

  return (
    <>
      <SignupFormBody
        submitButton={
          <SubmitBtn
            disabled={!(isValid && dirty)}
            submitFn={submitHandler}
            isLoading={isLoading}
            text={'Signup'}
          />
        }
      />
    </>
  );
};
