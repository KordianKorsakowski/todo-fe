import { useState } from 'react';
import { createContainer } from 'unstated-next';

const LoginContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

const useLoginContainer = createContainer(LoginContainer);
export const useLogin = useLoginContainer.useContainer;
export const LoginProvider = useLoginContainer.Provider;
