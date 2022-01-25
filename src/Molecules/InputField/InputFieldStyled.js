import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const InputFieldStyled = styled.input`
  width: 100%;
  height: 3rem;
  padding-left: 10px;
  border: 0.5px solid ${COLORS.grey400};
  border-radius: 8px;
  color: ${COLORS.grey400};
  font-family: Mulish, FontAwesome;
  ${FONTS.body_semibold};

  &::placeholder {
    color: ${COLORS.grey400};
  }
  &:focus {
    border: 0.5px solid transparent;
    outline: 3px solid ${COLORS.primary201};
  }

  /* &:invalid {
    border: 0.5px solid transparent;
    outline: 3px solid tomato;
  } */
`;

export default InputFieldStyled;
