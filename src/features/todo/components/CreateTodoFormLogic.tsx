import { useFormikContext } from 'formik';
import { useState } from 'react';
import {  TodoInterface } from '../types/types';


import { SubmitBtn } from '../../../components/form/submitBtn/SubmitBtn';
import { CreateTodoFormBody } from './CreateTodoFormBody';


export const CreateTodoFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { values, isValid, resetForm, setSubmitting, dirty } =
    useFormikContext<TodoInterface>();

  const submitHandler = async () => {
   
  };

  return (
    <>
      <CreateTodoFormBody
        submitButton={
          <SubmitBtn
            disabled={!(isValid && dirty)}
            submitFn={submitHandler}
            isLoading={isLoading}
            text={'create'}
          />
        }
      />
    </>
  );
};
