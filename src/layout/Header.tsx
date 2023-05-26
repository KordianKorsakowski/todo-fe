import { useRouter } from 'next/router';
import { LinkBtn } from '../components/btnLink/BtnLink';
import { routes } from '../routes';
import { HeaderWrapper } from './styles/HeaderStyles.styles';


export const Header = () => {
  const { pathname } = useRouter();
  const IsSignupPage = pathname === routes.user.signup ? true : false;
  return (
    <HeaderWrapper>
      {IsSignupPage ? (
        <LinkBtn text="Back home page" route={routes.home.home} />
      ) : (
        <LinkBtn text="Create account" route={routes.user.signup} />
      )}
    </HeaderWrapper>
  );
};
