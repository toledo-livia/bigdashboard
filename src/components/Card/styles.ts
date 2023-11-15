import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const Article = styled.article`
  display: grid;
  gap: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 2rem;
  margin-bottom: 1rem;
  background-color: ${colors.secondary};
`;
