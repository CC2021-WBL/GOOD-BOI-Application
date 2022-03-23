import propTypes from 'prop-types';

import CheckboxAgreeField from '../../Atoms/CheckboxAgreeField/CheckboxAgreeField';
import ColumnWrapper from './../../Templates/ColumnWrapper/ColumnWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import MainButton from '../../Atoms/MainButton/MainButton';
import RegistrationFormHeader from './RegistrationFormHeader';
import useCustomForm from './useCustomForm.js';
import validateData from './validateData';

const RegistrationFormSignup = ({
  submitForm,
  editData,
  editEmail,
  editPassword,
  initialState,
  editPhoneNumber,
  setUserObject,
}) => {
  const { handleInputChange, submitHandler, formData, errors } = useCustomForm(
    submitForm,
    validateData,
    initialState,
    setUserObject,
  );

  if (editData) {
    return (
      <ColumnWrapper
        paddingLeftRight={3}
        paddingTop={1}
        paddingBottom={1}
        maxWidthBigScreen={35}
        className="form-wrapper"
      >
        <RegistrationFormHeader />
        <FormWrapper onSubmit={submitHandler}>
          <InputField
            labelText="Imię"
            htmlFor="participantName"
            type="text"
            placeholder="&#xF007; Imię"
            id="participantName"
            value={formData.participantName}
            onChange={handleInputChange}
            className={errors.participantName ? 'red-border' : 'none'}
          />
          {errors.participantName && <p>{errors.participantName}</p>}
          <InputField
            labelText="Nazwisko"
            htmlFor="participantSurname"
            type="text"
            placeholder="&#xF007; Nazwisko"
            id="participantSurname"
            value={formData.participantSurname}
            onChange={handleInputChange}
            className={errors.participantSurname ? 'red-border' : 'none'}
          />
          {errors.participantSurname && <p>{errors.participantSurname}</p>}
          <InputField
            labelText="Ulica"
            htmlFor="street"
            type="text"
            placeholder="&#xf015; Ulica"
            id="street"
            value={formData.address.street}
            onChange={handleInputChange}
            className={errors.street ? 'red-border' : 'none'}
          />
          {errors.street && <p>{errors.street}</p>}
          <InputField
            labelText="Numer Domu"
            htmlFor="numberOfHouse"
            type="text"
            placeholder="&#xf015; Numer Domu"
            id="numberOfHouse"
            value={formData.address.numberOfHouse}
            onChange={handleInputChange}
            className={errors.numberOfHouse ? 'red-border' : 'none'}
          />
          {errors.numberOfHouse && <p>{errors.numberOfHouse}</p>}
          <InputField
            labelText="Kod Pocztowy"
            htmlFor="postalCode"
            type="text"
            placeholder="&#xf015; Kod Pocztowy"
            id="postalCode"
            value={formData.address.postalCode}
            onChange={handleInputChange}
            className={errors.postalCode ? 'red-border' : 'none'}
          />
          {errors.postalCode && <p>{errors.postalCode}</p>}
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
          <InputField
            labelText="Kraj"
            htmlFor="country"
            type="text"
            placeholder="&#xf015; Kraj"
            id="country"
            value={formData.address.country}
            onChange={handleInputChange}
            className={errors.country ? 'red-border' : 'none'}
          />
          {errors.country && <p>{errors.country}</p>}

          <MainButton primary text="Zapisz zmiany" />
        </FormWrapper>
      </ColumnWrapper>
    );
  } else if (editEmail) {
    return (
      <ColumnWrapper
        paddingLeftRight={3}
        paddingTop={1}
        paddingBottom={1}
        maxWidthBigScreen={35}
        className="form-wrapper"
      >
        <RegistrationFormHeader />
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
      </ColumnWrapper>
    );
  } else if (editPhoneNumber) {
    return (
      <FormWrapper onSubmit={submitHandler}>
        <InputField
          labelText="Numer Telefonu"
          htmlFor="phoneNumber"
          type="text"
          placeholder="&#xf095; Numer Telefonu"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className={errors.phoneNumber ? 'red-border' : 'none'}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        <MainButton primary text="Zapisz nowy numer telefonu" />
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
    <ColumnWrapper
      paddingLeftRight={3}
      paddingTop={1}
      paddingBottom={1}
      maxWidthBigScreen={35}
      className="form-wrapper"
    >
      <RegistrationFormHeader />

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
          htmlFor="participantName"
          type="text"
          placeholder="&#xF007; Imię"
          id="participantName"
          value={formData.participantName}
          onChange={handleInputChange}
          className={errors.participantName ? 'red-border' : 'none'}
        />
        {errors.participantName && <p>{errors.participantName}</p>}
        <InputField
          labelText="Nazwisko"
          htmlFor="participantSurname"
          type="text"
          placeholder="&#xF007; Nazwisko"
          id="participantSurname"
          value={formData.participantSurname}
          onChange={handleInputChange}
          className={errors.participantSurname ? 'red-border' : 'none'}
        />
        {errors.participantSurname && <p>{errors.participantSurname}</p>}
        <InputField
          labelText="Ulica"
          htmlFor="street"
          type="text"
          placeholder="&#xf015; Ulica"
          id="street"
          value={formData.street}
          onChange={handleInputChange}
          className={errors.street ? 'red-border' : 'none'}
        />
        {errors.street && <p>{errors.street}</p>}
        <InputField
          labelText="Numer Domu"
          htmlFor="numberOfHouse"
          type="text"
          placeholder="&#xf015; Numer Domu"
          id="numberOfHouse"
          value={formData.numberOfHouse}
          onChange={handleInputChange}
          className={errors.numberOfHouse ? 'red-border' : 'none'}
        />
        {errors.numberOfHouse && <p>{errors.numberOfHouse}</p>}
        <InputField
          labelText="Kod Pocztowy"
          htmlFor="postalCode"
          type="text"
          placeholder="&#xf015; Kod Pocztowy"
          id="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          className={errors.postalCode ? 'red-border' : 'none'}
        />
        {errors.postalCode && <p>{errors.postalCode}</p>}
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
        <InputField
          labelText="Kraj"
          htmlFor="country"
          type="text"
          placeholder="&#xf015; Kraj"
          id="country"
          value={formData.country}
          onChange={handleInputChange}
          className={errors.country ? 'red-border' : 'none'}
        />
        {errors.country && <p>{errors.country}</p>}
        <InputField
          labelText="Numer Telefonu"
          htmlFor="phoneNumber"
          type="text"
          placeholder="&#xf095; Numer Telefonu"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className={errors.phoneNumber ? 'red-border' : 'none'}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        <CheckboxAgreeField text="Zapoznałem się z regulaminem GOOD BOI i akceptuję jego postanowienia" />
        <MainButton primary text="Zarejestruj się" />
      </FormWrapper>
    </ColumnWrapper>
  );
};

RegistrationFormSignup.propTypes = {
  submitForm: propTypes.func.isRequired,
  editData: propTypes.bool,
  editEmail: propTypes.bool,
  editPassword: propTypes.bool,
  editPhoneNumber: propTypes.bool,
  initialState: propTypes.object,
};

export default RegistrationFormSignup;
