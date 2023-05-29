import { LoginForm } from '../../features/login/components/LoginForm';
import { DashboardLayout } from '../../layout/DashboardLayout';
import { Content } from '../../features/home/components/Contnet';
import { HomeWrapper } from '../../features/home/style/homeStyles.styles';
import { useLogin } from '../../containers/LoginContainer';

export default function Home() {
  const { isOpen } = useLogin();
  return (
    <DashboardLayout>
      <HomeWrapper>
        <Content />
        {isOpen && <LoginForm />}
      </HomeWrapper>
    </DashboardLayout>
  );
}
