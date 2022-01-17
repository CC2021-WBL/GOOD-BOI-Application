import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import InputField from '../../Atoms/InputField/InputField';
import MainBtn from '../../Atoms/MainBtn/MainBtn';
import { useState } from 'react';
import StyledForgotPassForm from './ForgotPassPageStyled';
import { useNavigate } from 'react-router-dom';

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
      <StyledForgotPassForm onSubmit={submitHandler}>
        <InputField
          labelText="Na jaki email wysłać powiadomienie ?"
          htmlFor="email"
          type="email"
          placeholder="&#xf0e0; Email"
          id="login"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <MainBtn primary text="Potwiedź" />
      </StyledForgotPassForm>
    </CardWrapper>
  );
};

export default ForgotPassPage;
