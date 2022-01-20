import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const InputFieldStyled = styled.input`
  ${FONTS.body_semibold};
  color: ${COLORS.grey400};
  box-sizing: border-box;
  font-family: Mulish, FontAwesome;
  width: 100%;
  height: 3rem;
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

  &:invalid {
    border: 0.5px solid transparent;
    outline: 3px solid tomato;
  }
`;

export default InputFieldStyled;
