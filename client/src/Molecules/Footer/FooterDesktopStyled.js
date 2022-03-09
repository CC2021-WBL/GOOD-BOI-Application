import styled from 'styled-components';

const FooterDesktopStyled = styled.footer`
  display: none;
  background: ${({ theme }) => theme.grey00};

  @media only screen and (min-width: 800px) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default FooterDesktopStyled;
