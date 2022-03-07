import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

export const NavElementStyled = styled.div`
  display: flex;
  width: 100%;
  height: 3.75rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.125rem;
  background: ${({ theme }) => theme.white};

  .navText {
    width: 80%;
    color: ${({ theme }) => theme.grey800};
    ${FONTS.h3}
  }
  .burger-wrapper {
    display: flex;
    width: 10%;
    text-align: left;

    .burger-icon {
      color: ${({ theme }) => theme.grey200};
      font-size: 1.25rem;
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 800px) {
    height: 110px;
    max-width: 1600px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.grey200};
  }
`;
