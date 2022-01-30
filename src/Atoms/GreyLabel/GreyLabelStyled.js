import styled from 'styled-components';

import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const GreyLabelStyled = styled.div`
  display: flex;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  background: ${COLORS.grey00};

  .greyLabelText {
    color: ${COLORS.grey800};
    ${FONTS.body_semibold};
  }
`;

export default GreyLabelStyled;
