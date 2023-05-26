import { Formik } from 'formik';
import * as Yup from 'yup';
import { PropsWithChildren } from 'react';

import {LoginInterface } from '../types/types';

type FormSignupConfigProps = PropsWithChildren<{
  initialValues:LoginInterface;
}>;

export const LoginFormConfig = (props: FormSignupConfigProps) => {
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