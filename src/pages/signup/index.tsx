
import { SignupForm } from '../../features/signup/components/SignupForm';
import { DashboardLayout } from '../../layout/DashboardLayout';

export default function Auth() {
  return (
    <DashboardLayout>
      <SignupForm />
    </DashboardLayout>
  );
}
