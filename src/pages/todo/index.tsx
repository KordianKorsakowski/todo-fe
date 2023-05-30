import { CreateTodoForm } from '../../features/todo/components/CreateTodoForm';
import { DashboardLayout } from '../../layout/DashboardLayout';

export default function Auth() {
  return (
    <DashboardLayout>
      <CreateTodoForm />
    </DashboardLayout>
  );
}
