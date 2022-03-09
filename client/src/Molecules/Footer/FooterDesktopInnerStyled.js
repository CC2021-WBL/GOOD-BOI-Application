import styled from 'styled-components';

import FONTS from './../../Styles/fontsStyledComponents';

const FooterInnerStyled = styled.footer`
  display: none;
  text-align: right;

  @media only screen and (min-width: 800px) {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    min-width: 600px;
    padding: 2rem;
    margin: auto;
    gap: clamp(2rem, 10vw, 15rem);
    p {
      color: ${({ theme }) => theme.grey800};
      ${FONTS.body_semibold};
      white-space: nowrap;
    }
    h3 {
      color: ${({ theme }) => theme.grey400};
    }
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1200px;
    justify-content: center;
    align-items: center;
  }
`;

export default FooterInnerStyled;
