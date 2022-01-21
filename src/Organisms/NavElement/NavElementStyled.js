import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

export const NavElementStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  border-bottom: 0.5px solid ${COLORS.grey400};
  padding: 0 1rem 0 0.563rem;

  .navText {
    color: ${COLORS.grey800};
    width: 33%;
    ${FONTS.h3}
  }
`;
