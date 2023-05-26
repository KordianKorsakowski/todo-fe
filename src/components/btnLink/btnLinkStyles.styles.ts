import { Button } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const LinkBtnStyle = styled(Button)`
  max-width: max-content;
  display: flex;
  gap: 1rem;
  color: ${colors.text.bright};
  letter-spacing: 2px;
`;
