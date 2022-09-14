// import COLORS from '../../Styles/varsStyledComponents';

import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const PointsTextStyled = styled.div`
  width: 25%;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: ${({ theme }) => theme.positive200};
  color: ${({ theme }) => theme.grey800};
  ${FONTS.h1};
`;

export default PointsTextStyled;
