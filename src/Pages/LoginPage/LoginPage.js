import 'font-awesome/css/font-awesome.min.css';
import InputField from '../../Atoms/InputField/InputField';
import Card from '../../Atoms/CardWrapper/CardWrapper';
import PriSecBtn from '../../Atoms/PriSecBtn/PriSecBtn';
import { useState } from 'react';
import StyledForm from './LoginPageStyled';
import { Link } from 'react-router-dom';

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
        <Link to="/forgot" className="forgot-pass">
          Zapomniałeś/aś hasła ?
        </Link>
        <PriSecBtn text="Zaloguj się" />
      </StyledForm>
    </Card>
  );
};

export default LoginPage;
