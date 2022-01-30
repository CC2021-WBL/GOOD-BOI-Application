import styled from 'styled-components';

import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const TextAreaStyled = styled.textarea`
  display: flex;
  width: 100%;
  height: 4.375rem;
  align-items: center;
  padding: 0 0 0 0.625rem;
  margin: 0 0 0.3125rem 0;
  border-radius: 0.5rem;
  resize: vertical;

  &::placeholder {
    ${FONTS.body_semibold}
  }

  &:focus {
    border: 0.5px solid transparent;
    outline: 3px solid ${COLORS.primary201};
  }

  &.red-border {
    border: 0.5px solid transparent;
    outline: 1.5px solid ${COLORS.negative400};
  }
`;
export default TextAreaStyled;
