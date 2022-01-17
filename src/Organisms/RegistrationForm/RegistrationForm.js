import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PriSecBtn from '../../Atoms/PriSecBtn/PriSecBtn';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import RegistrationFormStyled from './RegistrationFormStyled';
import InputField from '../../Molecules/InputField/InputField';
import CheckboxAgreeField from '../../Atoms/CheckboxAgreeField/CheckboxAgreeField';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [street, setStreet] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const data = { name, surname, email, password, street, zipcode, city };

    //test, after submit, entered user data
    console.log(data);
    navigate('/login');
  };

  return (
    <CardWrapper>
      <RegistrationFormStyled onSubmit={submitHandler}>
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
        <InputField
          labelText="Ulica i nr domu"
          htmlFor="street"
          type="text"
          placeholder="&#xf015; Ulica i nr domu"
          id="street"
          required
          value={street}
          onChange={(event) => setStreet(event.target.value)}
        />
        <InputField
          labelText="Kod Pocztowy"
          htmlFor="zipcode"
          type="text"
          placeholder="&#xf015; Kod Pocztowy"
          id="zipcode"
          required
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
        />
        <InputField
          labelText="Miasto"
          htmlFor="city"
          type="text"
          placeholder="&#xf015; Miasto"
          id="city"
          required
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <CheckboxAgreeField text="Zapoznałem się z regulaminem GOOD BOI i akceptuję jego postanowienia" />
        <PriSecBtn text="Zarejestruj się" />
      </RegistrationFormStyled>
    </CardWrapper>
  );
};

export default RegistrationForm;
