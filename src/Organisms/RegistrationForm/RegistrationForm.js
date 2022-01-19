import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainButton from '../../Atoms/MainButton/MainButton';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import CheckboxAgreeField from '../../Atoms/CheckboxAgreeField/CheckboxAgreeField';

const RegistrationForm = () => {
  const initialState = {
    firstname: '',
    surname: '',
    email: '',
    password: '',
    ['repeat-password']: '',
    street: '',
    zipcode: '',
    city: '',
  };

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    const data = { ...formData };

    //test, after submit, entered user data
    console.log(data);
    navigate('/login');
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <CardWrapper>
      <FormWrapper onSubmit={submitHandler}>
        <InputField
          labelText="Email"
          htmlFor="email"
          type="email"
          placeholder="&#xf0e0; Email"
          id="email"
          required
          value={setFormData.email}
          onChange={handleInputChange}
        />

        <InputField
          labelText="Hasło"
          htmlFor="password"
          type="password"
          id="password"
          placeholder="&#xf023; Hasło"
          required
          value={setFormData.password}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Powtórz Hasło"
          htmlFor="password"
          type="password"
          id="repeat-password"
          placeholder="&#xf023; Powtórz Hasło"
          required
          value={setFormData.password}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Imię"
          htmlFor="firstname"
          type="text"
          placeholder="&#xF007; Imię"
          id="firstname"
          required
          value={setFormData.firstname}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Nazwisko"
          htmlFor="surname"
          type="text"
          placeholder="&#xF007; Nazwisko"
          id="surname"
          required
          value={setFormData.surname}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Ulica i nr domu"
          htmlFor="street"
          type="text"
          placeholder="&#xf015; Ulica i nr domu"
          id="street"
          required
          value={setFormData.street}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Kod Pocztowy"
          htmlFor="zipcode"
          type="text"
          placeholder="&#xf015; Kod Pocztowy"
          id="zipcode"
          required
          value={setFormData.zipcode}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Miasto"
          htmlFor="city"
          type="text"
          placeholder="&#xf015; Miasto"
          id="city"
          required
          value={setFormData.city}
          onChange={handleInputChange}
        />
        <CheckboxAgreeField text="Zapoznałem się z regulaminem GOOD BOI i akceptuję jego postanowienia" />
        <MainButton primary text="Zarejestruj się" />
      </FormWrapper>
    </CardWrapper>
  );
};

export default RegistrationForm;
