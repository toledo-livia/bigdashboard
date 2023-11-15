import styled from 'styled-components';
import { breakpoints, colors, font } from '../../styles/theme';

export const ContentProfile = styled.div`
  display: grid;
  gap: 0.3rem;
  position: absolute;
  justify-content: center;
  bottom: 2rem;
  width: 100%;
`;

export const Figure = styled.figure`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoints.medium}) {
    height: 2.8rem;
    width: 2.8rem;
    margin-left: 0.5rem;
  }

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: 50%;

    @media (max-width: ${breakpoints.medium}) {
      height: 2.8rem;
      width: 2.8rem;
    }
  }
`;

export const Name = styled.span`
  color: ${colors.grey2};
  font-weight: ${font.bold};
  font-size: ${font.sizes.small};
  text-align: center;
`;

export const Email = styled.span`
  color: ${colors.grey6};
  font-size: ${font.sizes.small};
  text-align: center;
`;
