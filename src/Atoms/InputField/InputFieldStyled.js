import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';

const InputFieldStyled = styled.input`
  font-family: Mulish, FontAwesome;
  width: 90%;
  align-self: center;
  color: ${COLORS.grey400};
  font-size: 1.2em;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${COLORS.grey400};
  padding-left: 10px;
`;

export default InputFieldStyled;
