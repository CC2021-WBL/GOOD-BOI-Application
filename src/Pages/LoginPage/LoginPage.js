import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { useRef } from "react";
import InputField from "../InputField";
import Card from "../Card";
import PriSecBtn from "../PriSecBtn";

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
  const passInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredLogin = loginInputRef.current.value;
    const enteredPassword = passInputRef.current.value;

    const data = {
      login: enteredLogin,
      password: enteredPassword,
    };

    // Checking if submitted data apears in an object

    console.log(data);
  };

  return (
    <Card>
      <StyledForm onSubmit={submitHandler}>
        <InputField
          labelText="Login"
          htmlFor="login"
          type="text"
          placeholder="&#xF007; Login"
          id="login"
          reference={loginInputRef}
          required
        />

        <InputField
          labelText="Password"
          htmlFor="password"
          type="password"
          id="password"
          placeholder="&#xf084; Password"
          reference={passInputRef}
          required
        />
        <p>Zapomniałeś hasła ?</p>
        <PriSecBtn text="Zaloguj się" />
      </StyledForm>
    </Card>
  );
};

export default LoginPage;
