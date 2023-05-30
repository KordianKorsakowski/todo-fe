import { TextField, Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';
import { TodoInterface } from '../types/types';


interface FormDishBodyProps {
  submitButton: JSX.Element;
}

export const CreateTodoFormBody: React.FC<FormDishBodyProps> = ({
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
  } = useFormikContext<TodoInterface>();

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div style={{width: "80vw"}}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField
              name="priority"
              label={'priority'}
              value={values.priority || ''}
              fullWidth
              helperText={touched.priority && errors.priority}
              error={Boolean(touched.priority && errors.priority)}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              name="description"
              label={'description'}
              value={values.description || ''}
              fullWidth
              helperText={touched.description && errors.description}
              error={Boolean(touched.description && errors.description)}
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
