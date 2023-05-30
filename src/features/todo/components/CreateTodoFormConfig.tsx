import { Formik } from 'formik';
import * as Yup from 'yup';
import { PropsWithChildren } from 'react';

import { TodoInterface } from '../types/types';

type FormTodoConfigProps = PropsWithChildren<{
  initialValues: TodoInterface;
}>;

export const CreateTodoFormConfig = (props: FormTodoConfigProps) => {
  const { children, initialValues } = props;
  const validation = Yup.object().shape({
    priority: Yup.string().max(15).trim().required('Priority is requierd'),
    description: Yup.string().required(
        'Description is requierd'
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validateOnMount
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
      }}
    >
      {children}
    </Formik>
  );
};