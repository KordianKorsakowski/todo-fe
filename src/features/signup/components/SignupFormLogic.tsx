import { useFormikContext } from 'formik';
import { useState } from 'react';
import { SignupInterface } from '../types/types';
import { SignupFormBody } from './SignupFormBody';
import { SignupUserAPI } from '../../../api/auth/signupUserAPI';
import { SubmitBtn } from '../../../components/form/submitBtn/SubmitBtn';
import { useRouter } from 'next/router';
import { routes } from '../../../routes';
import { useLogin } from '../../../containers/LoginContainer';
import { useSnackbar } from '../../../containers/SnackbarContainer';

export const SignupFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { onOpen } = useLogin();
  const router = useRouter();
  const { setSnackbar } = useSnackbar();
  const { values, isValid, resetForm, setSubmitting, dirty } =
    useFormikContext<SignupInterface>();

  const submitHandler = async () => {
    setIsLoading(true);
    await SignupUserAPI(values)
      .then((res) => {
        if (res.message) {
          setSnackbar({ text: res.message, type: 'error' });
          return;
        }
        setSnackbar({ text: 'Success', type: 'success' });
        router.push(routes.home.home);
        onOpen();
      })
      .catch(() => {
        setSnackbar({ text: 'Error', type: 'error' });
      })
      .finally(() => {
        resetForm();
        setIsLoading(false);
      });
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
