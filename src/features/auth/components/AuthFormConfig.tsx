import { Formik } from 'formik';
import * as Yup from 'yup';
import { PropsWithChildren } from 'react';

import { AuthInterface } from '../types/types';

type FormAuthConfigProps = PropsWithChildren<{
  initialValues: AuthInterface;
}>;

export const AuthFormConfig = (props: FormAuthConfigProps) => {
  const { children, initialValues } = props;
  const validation = Yup.object().shape({
    email: Yup.string().max(255).trim().required('Name is requierd'),
    password: Yup.string().required(
        'Password is requierd'
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