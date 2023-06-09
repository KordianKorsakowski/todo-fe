import { useRouter } from 'next/router';
import { LinkBtnStyle } from './btnLinkStyles.styles';

interface SubmitBtnProps {
  text: string;
  route: string;
}

export const LinkBtn: React.FC<SubmitBtnProps> = ({ text, route }) => {
  const router = useRouter();
  return (
    <LinkBtnStyle
      fullWidth
      variant="outlined"
      color="secondary"
      onClick={() => {
        router.push(route);
      }}
    >
      {text}
    </LinkBtnStyle>
  );
};
