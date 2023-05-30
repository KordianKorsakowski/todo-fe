import styled from 'styled-components';
import { colors } from '../../../theme/colors';

export const ShowFormWrapper = styled.div`
  background-color: ${colors.secondColor};
  width: 90%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  color: ${colors.text.bright};
  text-transform: uppercase;
  cursor: pointer;
`;

export const CreateTodoFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  align-items: center;
`;
