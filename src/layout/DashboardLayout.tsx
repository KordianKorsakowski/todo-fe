import { GlobalStyles } from '../assets/GlobalStyles.styles';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children?: React.ReactNode;
};
export const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
