import propTypes from 'prop-types';

import CheckboxAgreeField from '../../Atoms/CheckboxAgreeField/CheckboxAgreeField';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import MainButton from '../../Atoms/MainButton/MainButton';
import useForm from './useForm.js';
import validateData from './validateData';

const RegistrationFormSignup = ({
  submitForm,
  editData,
  editEmail,
  editPassword,
  // eslint-disable-next-line react/prop-types
  initialState,
}) => {
  const { handleInputChange, submitHandler, formData, errors } = useForm(
    submitForm,
    validateData,
    initialState,
  );

  if (editData) {
    return (
      <FormWrapper onSubmit={submitHandler}>
        <InputField
          labelText="Imię"
          htmlFor="firstname"
          type="text"
          placeholder="&#xF007; Imię"
          id="firstname"
          value={formData.participantName}
          onChange={handleInputChange}
          className={errors.firstname ? 'red-border' : 'none'}
        />
        {errors.firstname && <p>{errors.firstname}</p>}
        <InputField
          labelText="Nazwisko"
          htmlFor="surname"
          type="text"
          placeholder="&#xF007; Nazwisko"
          id="surname"
          value={formData.participantSurname}
          onChange={handleInputChange}
          className={errors.surname ? 'red-border' : 'none'}
        />
        {errors.surname && <p>{errors.surname}</p>}
        <InputField
          labelText="Ulica i nr domu"
          htmlFor="street"
          type="text"
          placeholder="&#xf015; Ulica i nr domu"
          id="street"
          value={formData.address.street}
          onChange={handleInputChange}
          className={errors.street ? 'red-border' : 'none'}
        />
        {errors.street && <p>{errors.street}</p>}
        <InputField
          labelText="Kod Pocztowy"
          htmlFor="zipcode"
          type="text"
          placeholder="&#xf015; Kod Pocztowy"
          id="zipcode"
          value={formData.address.postalCode}
          onChange={handleInputChange}
          className={errors.zipcode ? 'red-border' : 'none'}
        />
        {errors.zipcode && <p>{errors.zipcode}</p>}
        <InputField
          labelText="Miasto"
          htmlFor="city"
          type="text"
          placeholder="&#xf015; Miasto"
          id="city"
          value={formData.address.city}
          onChange={handleInputChange}
          className={errors.city ? 'red-border' : 'none'}
        />
        {errors.city && <p>{errors.city}</p>}
        <MainButton primary text="Zapisz zmiany" />
      </FormWrapper>
    );
  } else if (editEmail) {
    return (
      <FormWrapper onSubmit={submitHandler}>
        <InputField
          labelText="Email"
          htmlFor="email"
          type="email"
          placeholder="&#xf0e0; Email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className={errors.email ? 'red-border' : 'none'}
        />
        {errors.email && <p>{errors.email}</p>}
        <MainButton primary text="Zapisz Nowy Email" />
      </FormWrapper>
    );
  } else if (editPassword) {
    return (
      <FormWrapper onSubmit={submitHandler}>
        <InputField
          labelText="Hasło"
          htmlFor="password"
          type="password"
          id="password"
          placeholder="&#xf023; Hasło"
          value={formData.password}
          onChange={handleInputChange}
          className={errors.password ? 'red-border' : 'none'}
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
          className={errors.repeatpass ? 'red-border' : 'none'}
        />
        {errors.repeatpass && <p>{errors.repeatpass}</p>}
        <MainButton primary text="Zapisz Nowe Hasło" />
      </FormWrapper>
    );
  }
  return (
    <FormWrapper onSubmit={submitHandler}>
      <InputField
        labelText="Email"
        htmlFor="email"
        type="email"
        placeholder="&#xf0e0; Email"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
        className={errors.email ? 'red-border' : 'none'}
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
        className={errors.password ? 'red-border' : 'none'}
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
        className={errors.repeatpass ? 'red-border' : 'none'}
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
        className={errors.firstname ? 'red-border' : 'none'}
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
        className={errors.surname ? 'red-border' : 'none'}
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
        className={errors.street ? 'red-border' : 'none'}
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
        className={errors.zipcode ? 'red-border' : 'none'}
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
        className={errors.city ? 'red-border' : 'none'}
      />
      {errors.city && <p>{errors.city}</p>}
      <CheckboxAgreeField text="Zapoznałem się z regulaminem GOOD BOI i akceptuję jego postanowienia" />
      <MainButton primary text="Zarejestruj się" />
    </FormWrapper>
  );
};

RegistrationFormSignup.propTypes = {
  submitForm: propTypes.func.isRequired,
  editData: propTypes.bool,
  editEmail: propTypes.bool,
  editPassword: propTypes.bool,
};

export default RegistrationFormSignup;
