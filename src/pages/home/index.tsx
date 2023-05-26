import { LoginForm } from '../../features/login/components/LoginForm';
import { DashboardLayout } from '../../layout/DashboardLayout';

export default function Home() {
  return (
    <DashboardLayout>
      <LoginForm />
    </DashboardLayout>
  );
}
