import styled from 'styled-components';
import { breakpoints } from '../styles/theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr 270px;
  grid-template-rows: 100vh;

  @media (max-width: ${breakpoints.medium}) {
    font-size: 60%;
    grid-template-columns: 100px 1fr;
  }
`;
