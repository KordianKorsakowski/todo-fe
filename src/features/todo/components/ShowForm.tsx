import { useTodo } from '../../../containers/TodoContiner';
import { ShowFormWrapper } from '../style/createTodoFormStyles.styles';

export const ShowForm = () => {
  const { onToggle } = useTodo();
  return <ShowFormWrapper onClick={onToggle}>Create</ShowFormWrapper>;
};
