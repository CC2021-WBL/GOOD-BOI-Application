import styled from 'styled-components';

const StyledForm = styled.form`
  width: 343px;
  display: flex;
  flex-direction: column;
  label {
    color: #323f4b;
    font-size: 0.7em;
    align-self: flex-start;
    padding: 10px 0 3px 0;
  }

  input {
    font-family: FontAwesome;
    color: #7b8794;
    font-size: 1.2em;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #7b8794;
    padding-left: 10px;
  }
`;

export default StyledForm;
