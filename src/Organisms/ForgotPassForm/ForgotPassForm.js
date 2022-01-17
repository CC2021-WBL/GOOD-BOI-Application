import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PriSecBtn from '../../Atoms/PriSecBtn/PriSecBtn';
import ForgotPassFormStyled from './ForgotPassFormStyled';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import InputField from '../../Molecules/InputField/InputField';

const ForgotPassPage = () => {
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
        <PriSecBtn text="Potwierdź" />
      </ForgotPassFormStyled>
    </CardWrapper>
  );
};

export default ForgotPassPage;
