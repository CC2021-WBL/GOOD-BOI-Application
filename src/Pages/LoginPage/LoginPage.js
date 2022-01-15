import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import InputField from '../../Atoms/InputField';
import Card from '../../Atoms/Card';
import PriSecBtn from '../../Atoms/PriSecBtn';
import { useState } from 'react';

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
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const data = { login, password };
    //test, after submit, entered user data
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
          required
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />

        <InputField
          labelText="Password"
          htmlFor="password"
          type="password"
          id="password"
          placeholder="&#xf084; Password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p>Zapomniałeś hasła ?</p>
        <PriSecBtn text="Zaloguj się" />
      </StyledForm>
    </Card>
  );
};

export default LoginPage;
