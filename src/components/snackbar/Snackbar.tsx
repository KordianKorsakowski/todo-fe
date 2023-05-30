import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useSnackbar } from '../../containers/SnackbarContainer';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbars = () => {
  const { isOpen, onClose, info } = useSnackbar();

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
        <Alert onClose={onClose} severity={info?.type} sx={{ width: '100%' }}>
          {info?.text}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
