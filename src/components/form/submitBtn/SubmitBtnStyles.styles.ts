import { Button } from '@mui/material';
import styled from 'styled-components';

export const SubmitBtnStyle = styled(Button)<{ disabled: boolean }>`
  max-width: max-content;
  display: flex;
  gap: 1rem;
`;
