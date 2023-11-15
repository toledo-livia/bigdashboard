import styled from 'styled-components';
import { FaSearch, FaRegBookmark } from 'react-icons/fa';
import { breakpoints, colors, font } from '../../styles/theme';

export const Main = styled.main`
  background-color: ${colors.grey9};
  padding: 3rem 3rem;
  overflow-y: scroll;

  @media (max-width: ${breakpoints.medium}) {
    font-size: ${font.sizes.small};
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const SearchIcon = styled(FaSearch)`
  font-size: ${font.sizes.heading01};
  border: 1px solid ${colors.grey8};
  padding: 0.8rem;
  margin: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s linear;
  color: ${colors.grey5};
`;

export const SaveIcon = styled(FaRegBookmark)`
  font-size: ${font.sizes.heading01};
  border: 1px solid ${colors.grey8};
  padding: 0.8rem;
  margin: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s linear;
  color: ${colors.grey5};
`;
