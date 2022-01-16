import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const StyledForgotPassForm = styled.form`
  width: 343px;
  display: flex;
  flex-direction: column;

  label {
    color: #323f4b;
    ${COLORS.grey800};
    ${FONTS.label_regular};
    align-self: flex-start;
    padding: 2em 0 3px 0;
  }

  input {
    font-family: Mulish, FontAwesome;
    color: #323f4b;
    ${FONTS.body_semibold};
    height: 48px;
    border-radius: 8px;
    border: 1px solid #323f4b;
    padding-left: 10px;
    margin: 0 0 1em 0;
  }

  input::placeholder {
    ${COLORS.grey400};
  }
`;

export default StyledForgotPassForm;
