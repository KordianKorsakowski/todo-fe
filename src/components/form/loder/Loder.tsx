import { CircularProgress } from '@mui/material';

import { WrapperLoder } from './LoderStyles.styles';

interface LoaderProps {
  size: string;
}

export const Loader = (props: LoaderProps) => {
  const { size } = props;
  return (
    <WrapperLoder>
      <CircularProgress
        style={{
          display: 'flex',
          width: size,
          height: size,
          color: `white`,
        }}
      />
    </WrapperLoder>
  );
};
