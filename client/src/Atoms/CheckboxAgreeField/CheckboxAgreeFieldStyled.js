import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const CheckboxAgreeFieldStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  ${FONTS.caption}
  text-align: left;

  input[type='checkbox'] {
    width: 30px;
    height: 30px;
    padding: 0 5px;
    margin: 0 10px 0 0;
    cursor: pointer;
  }
  .checkbox-text {
    padding: 10px 0;
    color: ${({ theme }) => theme.grey800};
    font-size: 1rem;
  }
`;

export default CheckboxAgreeFieldStyled;
