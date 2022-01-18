import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainBtn from '../../Atoms/MainBtn/MainBtn';
import ForgotPassFormStyled from './ForgotPassFormStyled';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import InputField from '../../Molecules/InputField/InputField';

const ForgotPassForm = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    //test, after submit, entered user data
    const data = { email };
    console.log(data);
    navigate('/login');
  };

  return (
    <CardWrapper>
      <ForgotPassFormStyled onSubmit={submitHandler}>
        <InputField
          labelText="Na jaki email wysłać powiadomienie ?"
          htmlFor="email"
          type="email"
          placeholder="&#xf0e0; Email"
          id="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <MainBtn primary text="Potwierdź" />
      </ForgotPassFormStyled>
    </CardWrapper>
  );
};

export default ForgotPassForm;
