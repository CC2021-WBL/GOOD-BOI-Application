import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { useRef } from "react";

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
  const loginInputRef = useRef();
  const emailInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredLogin = loginInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const data = {
      login: enteredLogin,
      email: enteredEmail,
    };

    // Checking if submitted data apears in an object

    console.log(data);
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={submitHandler}>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          placeholder="&#xF007; Login"
          id="login"
          required
          ref={loginInputRef}></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="&#xf084; Password"
          id="password"
          required
          ref={emailInputRef}></input>
        <p>Zapomniałeś hasła ?</p>
        <button>Zaloguj się</button>
      </StyledForm>
    </Wrapper>
  );
};

export default LoginPage;
