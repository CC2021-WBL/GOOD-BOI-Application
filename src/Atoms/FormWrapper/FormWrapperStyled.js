import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const FormWrapperStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    color: red;
    align-self: flex-start;
    font-size: 10px;
    letter-spacing: 1px;
    padding: 0 0 0 10px;
  }

  .forgot-pass {
    padding: 1em 0;
    text-decoration: none;
    ${FONTS.label_extrabold}
    color: ${COLORS.primary801};
  }
`;

export default FormWrapperStyled;
