import styled from 'styled-components';

import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const GreyLabelStyled = styled.div`
  background: ${COLORS.grey00};
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .greyLabelText {
    color: ${COLORS.grey800};
    ${FONTS.body_semibold};
  }
`;

export default GreyLabelStyled;
