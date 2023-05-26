import { TextField, Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';
import { AuthInterface } from '../types/types';


interface FormDishBodyProps {
  submitButton: JSX.Element;
}

export const AuthFormBody: React.FC<FormDishBodyProps> = ({
  submitButton,
}) => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    setFieldValue,
  } = useFormikContext<AuthInterface>();

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div>
        <h4>login</h4>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="email"
              label={'email'}
              value={values.email || ''}
              fullWidth
              helperText={touched.email && errors.email}
              error={Boolean(touched.email && errors.email)}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label={'password'}
              value={values.password || ''}
              fullWidth
              helperText={touched.password && errors.password}
              error={Boolean(touched.password && errors.password)}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </Grid>
         
        </Grid>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '2rem 0 0 0',
          }}
        >
          {submitButton}
        </div>
      </div>
    </form>
  );
};
