import styled from 'styled-components';
import { colors, font, breakpoints } from '../../styles/theme';

export const Sidebar = styled.aside`
  background-color: ${colors.white};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
  overflow-y: scroll;
  padding: 4rem 1.5rem;

  h4 {
    font-size: ${font.sizes.normal};
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;

export const Tasks = styled.div`
  grid-row: 1;
  margin-bottom: 1rem;
`;

export const Projects = styled.div`
  grid-row: 2;
`;
