import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const CheckBoxFormWrapperStyled = styled.div`
  width: 100%;
  margin: 20px 0 20px 10px;
  .checkBoxItem {
    flex-direction: row;
    align-items: center;
    justify-content: left;
  }

  div {
    display: flex;
    width: auto;
    justify-content: flex-start;
    align-items: center;
    height: 3rem;

    input {
      height: 24px;
      width: 50px;
      text-align: left;
    }

    input:focus {
      outline: none;
    }

    label {
      ${FONTS.caption};
      height: 24px;
      position: relative;
      top: 3px;
      padding: 0 0 0 10px;
    }
  }
`;

export default CheckBoxFormWrapperStyled;
