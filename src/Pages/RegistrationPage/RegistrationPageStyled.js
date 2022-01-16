import styled from 'styled-components';

const RegistrationPageStyled = styled.form`
  width: 343px;
  display: flex;
  flex-direction: column;
  label {
    color: #323f4b;
    font-size: 0.7em;
    align-self: flex-start;
  }

  input {
    font-family: FontAwesome;
    color: #323f4b;
    font-size: 1.2em;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #7b8794;
    padding-left: 10px;
    margin: 0 0 5px 0;
  }
  input::placeholder {
    color: #7b8794;
  }

  .checkboxWrap {
    display: flex;
    align-items: center;
    font-size: 15px;

    input[type='checkbox'] {
      cursor: pointer;
      width: 30px;
      margin: 0 5px 0 0;
      padding: 0 5px;
    }
  }
`;
export default RegistrationPageStyled;
