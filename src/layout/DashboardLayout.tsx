import { GlobalStyles } from '../assets/GlobalStyles.styles';
import { Footer } from './Footer';
import { Header } from './Header';
import { DashboardWrapper } from './styles/dashboardStyles.styles';

type Props = {
  children?: React.ReactNode;
};
export const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <DashboardWrapper>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </DashboardWrapper>
  );
};
