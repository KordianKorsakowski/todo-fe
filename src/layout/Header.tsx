import { useRouter } from 'next/router';
import { LinkBtn } from '../components/btnLink/BtnLink';
import { routes } from '../routes';

export const Header = () => {
  return (
    <div>
      <LinkBtn
        text="Create account"
        route={routes.user.signup}
      />
    </div>
  );
};
