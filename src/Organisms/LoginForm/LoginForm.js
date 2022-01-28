import 'font-awesome/css/font-awesome.min.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import MainButton from '../../Atoms/MainButton/MainButton';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const data = { email, password };
    //test, after submit, entered user data
    console.log(data);
  };

  return (
    <CardWrapper>
      <FormWrapper onSubmit={submitHandler}>
        <InputField
          labelText="Email"
          htmlFor="email"
          type="email"
          placeholder="&#xf0e0; Email"
          id="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <InputField
          labelText="Password"
          htmlFor="password"
          type="password"
          id="password"
          placeholder="&#xf023; Hasło"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Link to="/forgot" className="forgot-pass">
          Zapomniałeś/aś hasła ?
        </Link>
        <Link to="/role" style={{ textDecoration: 'none' }}>
          <MainButton primary text="Zaloguj się" />
        </Link>
      </FormWrapper>
    </CardWrapper>
  );
};

export default LoginForm;
