import useForm from './useForm.js';
import validateData from './validateData';
import MainButton from '../../Atoms/MainButton/MainButton';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import CheckboxAgreeField from '../../Atoms/CheckboxAgreeField/CheckboxAgreeField';
import propTypes from 'prop-types';

const RegistrationFormSignup = ({ submitForm }) => {
  const { handleInputChange, submitHandler, formData, errors } = useForm(
    submitForm,
    validateData,
  );

  return (
    <CardWrapper>
      <FormWrapper onSubmit={submitHandler}>
        <InputField
          labelText="Email"
          htmlFor="email"
          type="email"
          placeholder="&#xf0e0; Email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <InputField
          labelText="Hasło"
          htmlFor="password"
          type="password"
          id="password"
          placeholder="&#xf023; Hasło"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <InputField
          labelText="Powtórz Hasło"
          htmlFor="password"
          type="password"
          id="repeatpass"
          placeholder="&#xf023; Powtórz Hasło"
          value={formData.repeatpass}
          onChange={handleInputChange}
        />
        {errors.repeatpass && <p>{errors.repeatpass}</p>}
        <InputField
          labelText="Imię"
          htmlFor="firstname"
          type="text"
          placeholder="&#xF007; Imię"
          id="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
        {errors.firstname && <p>{errors.firstname}</p>}
        <InputField
          labelText="Nazwisko"
          htmlFor="surname"
          type="text"
          placeholder="&#xF007; Nazwisko"
          id="surname"
          value={formData.surname}
          onChange={handleInputChange}
        />
        {errors.surname && <p>{errors.surname}</p>}
        <InputField
          labelText="Ulica i nr domu"
          htmlFor="street"
          type="text"
          placeholder="&#xf015; Ulica i nr domu"
          id="street"
          value={formData.street}
          onChange={handleInputChange}
        />
        {errors.street && <p>{errors.street}</p>}
        <InputField
          labelText="Kod Pocztowy"
          htmlFor="zipcode"
          type="text"
          placeholder="&#xf015; Kod Pocztowy"
          id="zipcode"
          value={formData.zipcode}
          onChange={handleInputChange}
        />
        {errors.zipcode && <p>{errors.zipcode}</p>}
        <InputField
          labelText="Miasto"
          htmlFor="city"
          type="text"
          placeholder="&#xf015; Miasto"
          id="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        {errors.city && <p>{errors.city}</p>}
        <CheckboxAgreeField text="Zapoznałem się z regulaminem GOOD BOI i akceptuję jego postanowienia" />
        <MainButton primary text="Zarejestruj się" />
      </FormWrapper>
    </CardWrapper>
  );
};

RegistrationFormSignup.propTypes = {
  submitForm: propTypes.func.isRequired,
};

export default RegistrationFormSignup;
