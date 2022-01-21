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
    const data = { email };
    console.log(data);
    navigate('/login');
  };

  return (
    <CardWrapper>
      <FormWrapper onSubmit={submitHandler}>
        <p className="forgot-pass">Zapomniałeś hasła ?</p>
        <div>Wpisz maila na którego mamy wysłać nowe hasło</div>
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
        <MainButton primary text="Resetuj Hasło" />
      </FormWrapper>
    </CardWrapper>
  );
};

export default ForgotPassForm;
