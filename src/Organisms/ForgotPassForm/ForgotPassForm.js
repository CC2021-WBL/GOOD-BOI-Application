import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainButton from '../../Atoms/MainButton/MainButton';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

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
    <ColumnWrapper paddingLeftRight={1}>
      <FormWrapper onSubmit={submitHandler}>
        <p className="forgot-pass">Zapomniałeś hasła ?</p>
        <div className="forgot-pass-text">
          Wpisz maila na którego mamy wysłać nowe hasło
        </div>
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
    </ColumnWrapper>
  );
};

export default ForgotPassForm;
