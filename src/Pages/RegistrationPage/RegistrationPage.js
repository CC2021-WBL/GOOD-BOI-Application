import { useState } from 'react';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import InputField from '../../Atoms/InputField/InputField';
import PriSecBtn from '../../Atoms/PriSecBtn/PriSecBtn';
import RegistrationPageStyled from './RegistrationPageStyled';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const data = { name, surname, email, password };

    //test, after submit, entered user data
    console.log(data);
    navigate('/login');
  };

  return (
    <CardWrapper>
      <RegistrationPageStyled onSubmit={submitHandler}>
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
          placeholder="&#xf023; Password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <InputField
          labelText="Imię"
          htmlFor="name"
          type="text"
          placeholder="&#xF007; Imię"
          id="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <InputField
          labelText="Nazwisko"
          htmlFor="surname"
          type="text"
          placeholder="&#xF007; Nazwisko"
          id="surname"
          required
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
        <div className="checkboxWrap">
          <input type="checkbox" required />
          <p>
            Zapoznałem się z regulaminem GOOD BOI i akceptuję jego postanowienia
          </p>
        </div>
        <PriSecBtn text="Zarejestruj się" />
      </RegistrationPageStyled>
    </CardWrapper>
  );
};

export default RegistrationPage;
