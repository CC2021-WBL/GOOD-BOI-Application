import styled from 'styled-components';

const StyledForgotPassForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    color: #323f4b;
    font-size: 0.7em;
    align-self: flex-start;
    padding: 2em 0 3px 20px;
  }

  input {
    font-family: FontAwesome;
    color: #323f4b;
    font-size: 1.2em;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #7b8794;
    padding-left: 10px;
    margin: 0 0 1em 0;
  }
  input::placeholder {
    color: #7b8794;
  }
`;

export default StyledForgotPassForm;
