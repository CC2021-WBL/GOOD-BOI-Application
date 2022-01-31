import styled from 'styled-components';

import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

export const NavElementStyled = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 3.75rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 0.563rem;
  background-color: white;
  font-size: 10px;

  .navText {
    width: 33%;
    color: ${COLORS.grey800};
    ${FONTS.h1}
  }
`;
