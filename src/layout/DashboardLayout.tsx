import { GlobalStyles } from '../assets/GlobalStyles.styles';
import { CustomizedSnackbars } from '../components/snackbar/Snackbar';
import { Footer } from './Footer';
import { Header } from './Header';
import { DashboardWrapper } from './styles/dashboardStyles.styles';

type Props = {
  children?: React.ReactNode;
};
export const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <DashboardWrapper>
      <CustomizedSnackbars />
      {/* <GlobalStyles /> */}
      <Header />
      {children}
      <Footer />
    </DashboardWrapper>
  );
};
