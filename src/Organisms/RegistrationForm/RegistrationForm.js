import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PriSecBtn from '../../Atoms/PriSecBtn/PriSecBtn';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import RegistrationFormStyled from './RegistrationFormStyled';
import InputField from '../../Molecules/InputField/InputField';
import CheckboxAgreeField from '../../Atoms/CheckboxAgreeField/CheckboxAgreeField';

const RegistrationForm = () => {
  const initialState = {
    name: '',
    surname: '',
    email: '',
    password: '',
    street: '',
    zipcode: '',
    city: '',
  };

  const [formData, setFormData] = useState(initialState);
  // const [name, setName] = useState(initialState);
  // const [surname, setSurname] = useState(initialState);
  // const [email, setEmail] = useState(initialState);
  // const [password, setPassword] = useState(initialState);
  // const [street, setStreet] = useState(initialState);
  // const [zipcode, setZipcode] = useState(initialState);
  // const [city, setCity] = useState(initialState);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    const data = { ...formData };

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
          value={setFormData.email}
          onChange={(event) =>
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            })
          }
        />

        <InputField
          labelText="Password"
          htmlFor="password"
          type="password"
          id="password"
          placeholder="&#xf023; Hasło"
          required
          value={setFormData.password}
          onChange={(event) =>
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            })
          }
        />
        <InputField
          labelText="Imię"
          htmlFor="firstname"
          type="text"
          placeholder="&#xF007; Imię"
          id="firstname"
          required
          value={setFormData.firstname}
          onChange={(event) =>
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            })
          }
        />
        <InputField
          labelText="Nazwisko"
          htmlFor="surname"
          type="text"
          placeholder="&#xF007; Nazwisko"
          id="surname"
          required
          value={setFormData.surname}
          onChange={(event) =>
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            })
          }
        />
        <InputField
          labelText="Ulica i nr domu"
          htmlFor="street"
          type="text"
          placeholder="&#xf015; Ulica i nr domu"
          id="street"
          required
          value={setFormData.street}
          onChange={(event) =>
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            })
          }
        />
        <InputField
          labelText="Kod Pocztowy"
          htmlFor="zipcode"
          type="text"
          placeholder="&#xf015; Kod Pocztowy"
          id="zipcode"
          required
          value={setFormData.zipcode}
          onChange={(event) =>
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            })
          }
        />
        <InputField
          labelText="Miasto"
          htmlFor="city"
          type="text"
          placeholder="&#xf015; Miasto"
          id="city"
          required
          value={setFormData.city}
          onChange={(event) =>
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            })
          }
        />
        <CheckboxAgreeField text="Zapoznałem się z regulaminem GOOD BOI i akceptuję jego postanowienia" />
        <PriSecBtn text="Zarejestruj się" />
      </RegistrationFormStyled>
    </CardWrapper>
  );
};

export default RegistrationForm;
