import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const TextAreaStyled = styled.textarea`
  display: flex;
  width: 100%;
  height: 4.375rem;
  align-items: center;
  padding: 0 0 0 0.625rem;
  border: 0.5px solid ${({ theme }) => theme.grey400};
  margin: 0 0 0.3125rem 0;
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.grey800};
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.grey800};
    ${FONTS.body_semibold};
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
export default TextAreaStyled;
