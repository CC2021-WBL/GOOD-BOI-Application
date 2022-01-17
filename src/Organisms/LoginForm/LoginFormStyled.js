import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  .forgot-pass {
    padding: 1em 0;
    text-decoration: none;
    ${FONTS.label_extrabold}
    color: ${COLORS.primary801};
  }
`;

export default LoginFormStyled;
