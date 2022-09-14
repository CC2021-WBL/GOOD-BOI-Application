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
    height: 3rem;
    align-items: center;
    justify-content: flex-start;

    input {
      width: 3.125rem;
      height: 1.5rem;
      text-align: left;
    }

    input:focus {
      outline: none;
    }

    label {
      position: relative;
      top: 0.1875rem;
      height: 1.5rem;
      padding: 0 0 0 0.625rem;
      color: ${({ theme }) => theme.grey800};
      ${FONTS.caption};
    }
  }
`;

export default CheckBoxFormWrapperStyled;
