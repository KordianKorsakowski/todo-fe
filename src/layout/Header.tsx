import { useRouter } from 'next/router';
import { LinkBtn } from '../components/btnLink/BtnLink';
import { routes } from '../routes';
import { HeaderWrapper } from './styles/headerStyles.styles';
import { Btn } from '../components/btn/Btn';
import { useLogin } from '../containers/LoginContainer';
import { LogoutBtn } from '../features/todo/components/LogoutBtn';

export const Header = () => {
  const { pathname } = useRouter();
  const { onToggle } = useLogin();
  const IsSignupPage = pathname === routes.user.signup ? true : false;

  const homePage = pathname === routes.home.home;
  const signupPage = pathname === routes.user.signup;
  const todoPage = pathname === routes.todo.todo;
  return (
    <HeaderWrapper>
      {homePage && (
        <>
          <LinkBtn text="Create account" route={routes.user.signup} />{' '}
          <Btn text="login" actionFn={onToggle} />
        </>
      )}
      {signupPage && <LinkBtn text="Back home page" route={routes.home.home} />}
      {todoPage && <LogoutBtn />}
    </HeaderWrapper>
  );
};
