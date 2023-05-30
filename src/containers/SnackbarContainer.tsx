import { useState } from 'react';
import { createContainer } from 'unstated-next';
interface snackBarInterface {
  text: string;
  type: 'success' | 'info' | 'error';
}

const SnackbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState<snackBarInterface>();
  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const setSnackBar = (data: snackBarInterface) => {
    setInfo({ text: data.text, type: data.type });
    onOpen();
  };
  return {
    isOpen,
    onOpen,
    onClose,
    setSnackBar,
    info
  };
};

const useSnackbarContainer = createContainer(SnackbarContainer);
export const useSnackbar = useSnackbarContainer.useContainer;
export const SnackbarProvider = useSnackbarContainer.Provider;
