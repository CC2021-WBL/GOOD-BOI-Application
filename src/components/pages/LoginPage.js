import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

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

const LoginPage = () => {
  return (
    <Wrapper>
      <StyledForm>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          placeholder="&#xF007; Login"
          id="login"
          required></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="&#xF199; Username"
          id="email"
          required></input>
        <p>Zapomniałeś hasła ?</p>
      </StyledForm>
    </Wrapper>
  );
};

export default LoginPage;
