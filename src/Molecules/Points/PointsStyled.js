import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const PointsTextStyled = styled.div`
  box-sizing: border-box;
  width: 25%;
  margin: 0;
  justify-content: center;
  align-items: center;
  ${FONTS.h1};
  background-color: ${COLORS.positive200};
`;

export default PointsTextStyled;
