import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const FooterDesktopStyled = styled.footer`
  display: flex;
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
`;

export default FooterDesktopStyled;
