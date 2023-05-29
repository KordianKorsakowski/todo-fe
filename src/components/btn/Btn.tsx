import { BtnStyle } from './btnStyles.styles';

interface BtnProps {
  text: string;
  actionFn: () => void;
}

export const Btn: React.FC<BtnProps> = ({ text, actionFn }) => {
  return (
    <BtnStyle
      fullWidth
      variant="outlined"
      color="secondary"
      onClick={actionFn}
    >
      {text}
    </BtnStyle>
  );
};
