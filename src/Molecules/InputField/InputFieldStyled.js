import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const InputFieldStyled = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 0 0 10px;
  border: 0.5px solid ${({ theme }) => theme.grey400};
  margin: 0 0 3px 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.grey400};
  font-family: Mulish, FontAwesome, sans-serif;
  ${FONTS.body_semibold};
  background: ${({ theme }) => theme.white};
  &::placeholder {
    color: ${({ theme }) => theme.grey400};
  }

  &:focus {
    border: 0.5px solid transparent;
    outline: 3px solid ${({ theme }) => theme.primary201};
  }

  &.red-border {
    border: 0.5px solid transparent;
    outline: 1.5px solid ${COLORS.negative400};
  }
`;

export default InputFieldStyled;
