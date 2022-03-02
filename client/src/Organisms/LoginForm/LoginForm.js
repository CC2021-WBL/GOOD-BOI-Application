import 'font-awesome/css/font-awesome.min.css';

import { useContext, useState } from 'react';

import BackgroundStyled from './../../PagesBody/InProgressPage/BackgroundStyled';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import { Link } from 'react-router-dom';
import MainButton from '../../Atoms/MainButton/MainButton';
import { UserDataContext } from '../../Context/UserDataContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(UserDataContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const data = { email, password };
    //test, after submit, entered user data
    console.log(data);
  };

  return (
    <>
      {window.innerWidth >= 800 && <BackgroundStyled></BackgroundStyled>}
      <ColumnWrapper paddingLeftRight={1}>
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
            <MainButton
              onClick={() => {
                dispatch({ type: 'LOG_IN' });
              }}
              primary
              text="Zaloguj się"
            />
          </Link>
        </FormWrapper>
      </ColumnWrapper>
      {window.innerWidth > 700 && <div style={{ height: '235px' }}></div>}
    </>
  );
};

export default LoginForm;
