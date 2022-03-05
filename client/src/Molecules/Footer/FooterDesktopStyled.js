import FONTS from '../../Styles/fontsStyledComponents';
import { device } from './../../Consts/devices';
import styled from 'styled-components';

const FooterDesktopStyled = styled.footer`
  display: none;
  background: ${({ theme }) => theme.grey00};
  text-align: right;
  h3 {
    color: ${({ theme }) => theme.grey400};
  }
  p {
    color: ${({ theme }) => theme.grey800};
    ${FONTS.body_semibold};
  }

  @media only screen and (${device.tablet}) {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export default FooterDesktopStyled;
