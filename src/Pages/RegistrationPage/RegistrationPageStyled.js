import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const RegistrationPageStyled = styled.form`
  width: 327px;
  display: flex;
  flex-direction: column;

  label {
    color: ${COLORS.grey800};
    ${FONTS.label_regular};
    align-self: flex-start;
    padding: 0 0 3px 10px;
  }

  input {
    font-family: Mulish, FontAwesome;
    color: ${COLORS.grey800};
    ${FONTS.body_semibold};
    height: 48px;
    border-radius: 8px;
    border: 0.5px solid ${COLORS.grey400};
    padding-left: 10px;
    margin: 0 0 5px 0;

    &::placeholder {
      color: ${COLORS.grey400};
    }

    &:focus {
      outline: none;
      border: 0.5px solid blue;
    }
  }

  .checkboxWrap {
    display: flex;
    align-items: center;
    text-align: left;
    font-size: 14px;
    line-height: 15.96px;
    letter-spacing: 0.2px;

    input[type='checkbox'] {
      cursor: pointer;
      width: 30px;
      margin: 0 10px 0 0;
      padding: 0 5px;
    }
  }
`;
export default RegistrationPageStyled;
