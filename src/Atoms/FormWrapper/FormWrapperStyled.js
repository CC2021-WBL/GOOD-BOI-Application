import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const FormWrapperStyled = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;

  p {
    align-self: flex-start;
    padding: 0 0 0 10px;
    color: red;
    font-size: 10px;
    letter-spacing: 1px;
  }

  .forgot-pass {
    align-self: center;
    padding: 1em 0;
    color: ${({ theme }) => theme.primary801};
    ${FONTS.body_bold}
    text-decoration: none;
  }

  .forgot-pass-text {
    padding: 0 30px 10px;
    color: ${({ theme }) => theme.grey400};
  }
`;

export default FormWrapperStyled;
