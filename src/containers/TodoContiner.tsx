import { useState } from 'react';
import { createContainer } from 'unstated-next';

const TodoContainer = () => {
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

const useTodoContainer = createContainer(TodoContainer);
export const useTodo = useTodoContainer.useContainer;
export const TodoProvider = useTodoContainer.Provider;
