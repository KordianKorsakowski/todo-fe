import { useFormikContext } from 'formik';
import { useState } from 'react';
import { SignupInterface } from '../types/types';
import { SignupFormBody } from './SignupFormBody';
import { SignupUserAPI } from '../api/signupUserAPI';
import { SubmitBtn } from '../../../components/form/submitBtn/SubmitBtn';

export const SignupFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { values, isValid, resetForm, setSubmitting, dirty } =
    useFormikContext<SignupInterface>();

  const submitHandler = async () => {
    setIsLoading(true);
    await SignupUserAPI(values);
    setIsLoading(false);
    resetForm();
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
