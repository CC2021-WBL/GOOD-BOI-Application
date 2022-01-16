import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const GreyLabelContainer = styled.div`
  background: ${COLORS.grey00};
  height: 2.5rem;
  font-family: Mulish;
  display: flex;
  justify-content: center;
  align-items: center;

  .greyLabelText {
    color: ${COLORS.grey800};
    ${FONTS.body_semibold}
  }
`;

export default GreyLabelContainer;
