import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const InputFieldStyled = styled.input`
  font-family: Mulish, FontAwesome;
  width: 95%;
  align-self: center;
  color: ${COLORS.grey800};
  ${FONTS.body_semibold};
  height: 48px;
  border-radius: 8px;
  border: 0.5px solid ${COLORS.grey400};
  padding-left: 10px;

  &::placeholder {
    color: ${COLORS.grey400};
  }
  &:focus {
    border: 0.5px solid transparent;
    outline: 3px solid ${COLORS.primary201};
  }
`;

export default InputFieldStyled;
