import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import InputField from '../../Atoms/InputField/InputField';
import PriSecBtn from '../../Atoms/PriSecBtn/PriSecBtn';
import { useState } from 'react';
import StyledForgotPassForm from './ForgotPassPageStyled';
import { useNavigate } from 'react-router-dom';

const ForgotPassPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const data = { email };
    console.log(`User data: ${data}`);
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
        <PriSecBtn text="Potwiedź" />
      </StyledForgotPassForm>
    </CardWrapper>
  );
};

export default ForgotPassPage;
