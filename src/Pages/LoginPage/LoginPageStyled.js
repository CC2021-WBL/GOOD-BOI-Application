import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    color: #323f4b;
    font-size: 0.7em;
    align-self: flex-start;
    padding: 2em 0 3px 20px;
  }

  .forgot-pass {
    padding: 1em 0;
    font-size: 0.8rem;
  }
`;

export default StyledForm;
