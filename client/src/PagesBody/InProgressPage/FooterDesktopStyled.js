import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const FooterDesktopStyled = styled.footer`
  display: flex;
  position: relative;
  bottom: 0px;
  width: 100%;
  height: 239px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.grey00};
  text-align: right;
  h3 {
    color: ${({ theme }) => theme.grey400};
  }
  p {
    color: ${({ theme }) => theme.grey800};
    ${FONTS.body_semibold};
  }
  &.fixed {
    margin-top: auto;
    position: fixed;
  }
  &.relative {
    position: relative;
  }
`;

export default FooterDesktopStyled;
