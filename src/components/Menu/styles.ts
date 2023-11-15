import styled from 'styled-components';
import { breakpoints, colors, font } from '../../styles/theme';

export const Nav = styled.nav`
  background-color: ${colors.grey9};
  position: relative;
  border-right: 1px solid ${colors.grey8};

  @media (max-width: ${breakpoints.medium}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 2rem;

  span {
    font-weight: bold;
    font-size: ${font.sizes.normal};
  }

  img {
    width: 50px;
  }

  @media (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  font-size: ${font.sizes.normal};
  gap: 1rem;
  align-items: center;
  margin: 1rem 2rem;
  padding: 1.3rem 3rem;
  transition: all 0.3s linear;

  &:hover {
    background-color: ${colors.grey2};
    cursor: pointer;
    border-radius: 2.5rem;
    color: ${colors.white};
  }

  li {
    font-weight: ${font.bold};
    list-style-type: none;
  }

  @media (max-width: ${breakpoints.medium}) {
    font-size: ${font.sizes.large};
    padding: 1rem 0.1rem;

    span {
      display: flex;
    }

    li {
      display: none;
    }

    &:hover {
      animation: bounce 2s ease-in-out infinite;
      background-color: transparent;
    }
  }
`;

export const Icon = styled.div`
  display: none;

  @media (max-width: ${breakpoints.medium}) {
    display: flex;
  }
`;
