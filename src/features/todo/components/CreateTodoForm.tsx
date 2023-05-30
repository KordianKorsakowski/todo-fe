import { useTodo } from '../../../containers/TodoContiner';
import { CreateTodoFormWrapper } from '../style/createTodoFormStyles.styles';
import { TodoInterface } from '../types/types';
import { CreateTodoFormConfig } from './CreateTodoFormConfig';
import { CreateTodoFormLogic } from './CreateTodoFormLogic';
import { ShowForm } from './ShowForm';

export const CreateTodoForm = () => {
  const { isOpen } = useTodo();
  const initialValues: TodoInterface = {
    priority: 'medium',
    description: '',
  };
  return (
    <CreateTodoFormWrapper>
      <ShowForm />
      {isOpen && (
        <CreateTodoFormConfig initialValues={initialValues}>
          <CreateTodoFormLogic />
        </CreateTodoFormConfig>
      )}
    </CreateTodoFormWrapper>
  );
};
