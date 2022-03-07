import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const CheckBoxFormWrapperStyled = styled.div`
  width: 100%;
  margin: 1.25rem 0 1.25rem 0.625rem;
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
      height: 1.5rem;
      width: 3.125rem;
      text-align: left;
    }

    input:focus {
      outline: none;
    }

    label {
      ${FONTS.caption};
      height: 1.5rem;
      position: relative;
      top: 0.1875rem;
      padding: 0 0 0 0.625rem;
    }
  }
`;

export default CheckBoxFormWrapperStyled;
