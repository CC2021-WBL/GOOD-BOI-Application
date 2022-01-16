import 'font-awesome/css/font-awesome.min.css';
import InputField from '../../Atoms/InputField/InputField';
import Card from '../../Atoms/CardWrapper/CardWrapper';
import PriSecBtn from '../../Atoms/PriSecBtn/PriSecBtn';
import { useState } from 'react';
import StyledForm from './LoginPageStyled';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const data = { email, password };
    //test, after submit, entered user data
    console.log(data);
  };

  return (
    <Card>
      <StyledForm onSubmit={submitHandler}>
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
        <PriSecBtn text="Zaloguj się" />
      </StyledForm>
    </Card>
  );
};

export default LoginPage;
