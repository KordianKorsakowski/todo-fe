import {CreateInterface } from '../types/types';
import { CreateFormConfig } from './CreateFormConfig';
import { CreateFormLogic } from './CreateFormLogic';

export const CreateForm = () => {
  const initialValues: CreateInterface = {
    email: '',
    password: '',
  };
  return (
    <>
      <CreateFormConfig initialValues={initialValues}>
        <CreateFormLogic />
      </CreateFormConfig>
    </>
  );
};
