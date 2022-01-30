import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const InputLabelStyled = styled.label`
  align-self: flex-start;
  padding: 10px 0 5px 10px;
  color: ${COLORS.grey800};
  ${FONTS.label_regular};
`;

export default InputLabelStyled;
