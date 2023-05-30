import { useRouter } from 'next/router';
import { Btn } from '../../../components/btn/Btn';
import { LinkBtn } from '../../../components/btnLink/BtnLink';
import { routes } from '../../../routes';
import { logoutUserAPI } from '../api/logoutUserAPI';

export const LogoutBtn = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    await logoutUserAPI();
    router.push(routes.home.home);
  };
  return <Btn text="Logout" actionFn={logoutHandler} />;
};
