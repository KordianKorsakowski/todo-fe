import { useRouter } from 'next/router';
import { Btn } from '../../../components/btn/Btn';
import { LinkBtn } from '../../../components/btnLink/BtnLink';
import { routes } from '../../../routes';
import { logoutUserAPI } from '../../../api/auth/logoutUserAPI';
import { useSnackbar } from '../../../containers/SnackbarContainer';

export const LogoutBtn = () => {
  const { setSnackbar } = useSnackbar();
  const router = useRouter();
  const logoutHandler = async () => {
    await logoutUserAPI().then(() => {
      setSnackbar({ text: 'See you next time', type: 'info' });
      router.push(routes.home.home);
    }).catch(()=> {
      setSnackbar({ text: 'Error', type: 'error' });
    });
  };
  return <Btn text="Logout" actionFn={logoutHandler} />;
};
