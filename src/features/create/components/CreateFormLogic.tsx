import { useFormikContext } from 'formik';
import { useState } from 'react';
import { CreateInterface } from '../types/types';
import { CreateFormBody } from './CreateFormBody';
import { createUserAPI } from '../api/createUserAPI';
import { SubmitBtn } from '../../../components/form/submitBtn/SubmitBtn';

export const CreateFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { values, isValid, resetForm, setSubmitting, dirty } =
    useFormikContext<CreateInterface>();

  const submitHandler = async () => {
    setIsLoading(true);
    await createUserAPI(values);
    setIsLoading(false);
    resetForm();
  };

  return (
    <>
      <CreateFormBody
        submitButton={
          <SubmitBtn
            disabled={!(isValid && dirty)}
            submitFn={submitHandler}
            isLoading={isLoading}
            text={'Create'}
          />
        }
      />
    </>
  );
};
