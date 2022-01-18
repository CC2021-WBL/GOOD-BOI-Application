import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const InputLabelStyled = styled.label`
  color: ${COLORS.grey800};
  ${FONTS.label_regular};
  align-self: flex-start;
  padding: 0 0 5px 10px;
`;

export default InputLabelStyled;
