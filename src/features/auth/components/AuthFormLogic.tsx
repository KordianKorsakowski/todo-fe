import { useFormikContext } from 'formik';
import { useState } from 'react';
import { AuthInterface } from '../types/types';
import { AuthFormBody } from './AuthFormBody';
import { Button } from '@mui/material';
import { createUserAPI } from '../api/createUserAPI';

export const AuthFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { values, isValid, resetForm, setSubmitting, dirty } =
    useFormikContext<AuthInterface>();

  const submitHandler = async () => {
    console.log(values);
    createUserAPI(values);
  };

  return (
    <>
      <AuthFormBody
        submitButton={
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={submitHandler}
            disabled={!(isValid && dirty)}
          >
            test
          </Button>
        }
      />
    </>
  );
};
