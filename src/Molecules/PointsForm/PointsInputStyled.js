import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const PointsInputStyled = styled.input`
  width: 65%;
  max-width: 5rem;
  height: 3rem;
  border: 1px ${COLORS.grey800};
  border-radius: 0.75rem;
  ${FONTS.h1};
  text-align: center;

  :focus {
    color: black;
    outline: 2px solid ${COLORS.grey800};
  }
`;

export default PointsInputStyled;
