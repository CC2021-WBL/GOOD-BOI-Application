import styled from 'styled-components';

import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const TextAreaStyled = styled.textarea`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 0 0 10px;
  border-radius: 0.5rem;
  resize: vertical;

  &::placeholder {
    ${FONTS.body_semibold}
  }

  &:focus {
    border: 0.5px solid transparent;
    outline: 3px solid ${COLORS.primary201};
  }
`;
export default TextAreaStyled;
