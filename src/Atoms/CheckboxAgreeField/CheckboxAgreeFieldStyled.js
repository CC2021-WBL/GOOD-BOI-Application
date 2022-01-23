import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';

const CheckboxAgreeFieldStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: left;
  ${FONTS.caption}

  input[type='checkbox'] {
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
    padding: 0 5px;
  }
  .checkbox-text {
    font-size: 1rem;
    padding: 10px 0;
  }
`;

export default CheckboxAgreeFieldStyled;
