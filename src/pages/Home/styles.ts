import styled from 'styled-components';
import { font, breakpoints } from '../../styles/theme';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 110rem;
  margin: 0 auto;

  p {
    text-align: center;
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: ${font.light};
    line-height: ${font.lineHeight.xxsmall};

    @media (max-width: ${breakpoints.medium}) {
      font-size: 1.6rem;
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 2.4rem;

    h1 {
      font-size: ${font.sizes.heading04};
      text-align: center;
    }
  }
`;

export const CreatedBy = styled.div`
  margin-top: 2.7rem;

  span {
    font-size: 1.4rem;
  }

  @media (max-width: ${breakpoints.medium}) {
    margin-top: 3rem;
  }
`;
