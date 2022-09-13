import 'font-awesome/css/font-awesome.min.css';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import BackgroundDivStyled from '../../Atoms/BackgroundLanding/BackgroundDivStyled';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import MainButton from '../../Atoms/MainButton/MainButton';
import { UserDataContext } from '../../Context/UserDataContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch, login } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = { email, password };

    await login(data, dispatch, navigate);
  };

  return (
    <>
      <BackgroundDivStyled className="login-page-background" />
      <ColumnWrapper
        className="login-column-wrapper grid-position"
        paddingLeftRight={1}
      >
        <div className="login-form-captions">
          <p className="login-form-header">Witaj Ponownie!</p>
          <p>Zaloguj się poniżej, aby uzyskać dostęp do konta. </p>
        </div>
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
          <MainButton primary text="Zaloguj się" />
          <div>
            Nie masz konta?
            <Link to="/register" className="forgot-pass">
              <> </>Zarejestruj się
            </Link>
          </div>
        </FormWrapper>
      </ColumnWrapper>
    </>
  );
};

export default LoginPage;
