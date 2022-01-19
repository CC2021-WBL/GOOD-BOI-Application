import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainButton from '../../Atoms/MainButton/MainButton';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
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
      <FormWrapper onSubmit={submitHandler}>
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
        <MainButton primary text="Potwierdź" />
      </FormWrapper>
    </CardWrapper>
  );
};

export default ForgotPassForm;
