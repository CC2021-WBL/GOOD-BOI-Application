import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const InputLabelStyled = styled.label`
  align-self: flex-start;
  padding: 10px 0 5px 10px;
  color: ${({ theme }) => theme.grey800};
  ${FONTS.label_regular};
`;

export default InputLabelStyled;
