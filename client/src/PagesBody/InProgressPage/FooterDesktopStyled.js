import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const FooterDesktopStyled = styled.div`
  display: flex;
  width: 100%;
  height: 14.9375rem;
  flex-direction: row;
  /* position: fixed; */
  bottom: 0;
  align-items: center;
  justify-content: center;
  /* padding: 2rem; */
  /* margin: auto; */
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
