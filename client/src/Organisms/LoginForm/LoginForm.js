import 'font-awesome/css/font-awesome.min.css';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import MainButton from '../../Atoms/MainButton/MainButton';
import { USER_ACTIONS } from '../../Consts/reducersActions';
import { UserDataContext } from '../../Context/UserDataContext';
import { genRequestOptionsPOST } from '../../FetchData/requestOptions';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = { email, password };

    try {
      const response = await fetch(
        '/api/users/login',
        genRequestOptionsPOST(data),
      );
      const result = await response.json();

      dispatch({
        type: USER_ACTIONS.LOG_IN,
        payload: {
          userId: result.user.userId,
          userName: result.user.userName,
          userSurname: result.user.userSurname,
          roles: result.user.roles,
        },
      });
      navigate('/role');
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };

  return (
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
        <MainButton primary text="Zaloguj się" />
      </FormWrapper>
    </ColumnWrapper>
  );
};

export default LoginForm;
