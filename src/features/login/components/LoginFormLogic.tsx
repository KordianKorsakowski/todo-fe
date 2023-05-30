import { useFormikContext } from 'formik';
import { useState } from 'react';
import { LoginInterface } from '../types/types';
import { LoginFormBody } from './LoginFormBody';
import { loginAPI } from '../api/loginAPI';
import { SubmitBtn } from '../../../components/form/submitBtn/SubmitBtn';
import { routes } from '../../../routes';
import { useLogin } from '../../../containers/LoginContainer';
import { useRouter } from 'next/router';
import { Alert } from '@mui/material';
import { CustomizedSnackbars } from '../../../components/snackbar/Snackbar';
import { useSnackbar } from '../../../containers/SnackbarContainer';

export const LoginFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { setSnackBar } = useSnackbar();
  const { onClose } = useLogin();

  const { values, isValid, resetForm, setSubmitting, dirty } =
    useFormikContext<LoginInterface>();

  const submitHandler = async () => {
    setIsLoading(true);
    await loginAPI(values)
      .then((res) => {
        if (res.message) {
          setSnackBar({ text: res.message, type: 'error' });
          return;
        }
        setSnackBar({ text: 'Success', type: 'success' });
        router.push(routes.todo.todo);
        onClose();
      })
      .catch((err) => {
        console.log('err', err);
      })
      .finally(() => {
        resetForm();
      });
    setIsLoading(false);
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
