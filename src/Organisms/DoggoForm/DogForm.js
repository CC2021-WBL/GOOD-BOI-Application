import 'font-awesome/css/font-awesome.min.css';

import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import MainButton from '../../Atoms/MainButton/MainButton';
import propTypes from 'prop-types';
import useDogForm from '../../Hooks/useDogForm';
import validateDogData from './validateDogData';

const DogForm = ({ submitForm, initialState }) => {
  const { handleInputChange, submitHandler, formData, errors } = useDogForm(
    submitForm,
    validateDogData,
    initialState,
  );

  return (
    <FormWrapper onSubmit={submitHandler}>
      <InputField
        labelText="Imię rodowodowe psa"
        htmlFor="dogName"
        type="text"
        placeholder="&#xF007; Imię rodowodowe psa"
        id="dogName"
        required
        value={formData.dogName}
        onChange={handleInputChange}
        className={errors.dogName ? 'red-border' : 'none'}
      />
      {errors.dogName && <p>{errors.dogName}</p>}
      <InputField
        labelText="Przydomek"
        htmlFor="kennelName"
        type="text"
        placeholder="&#xF007; Przydomek"
        id="kennelName"
        value={formData.kennelName}
        onChange={handleInputChange}
        className={errors.kennelName ? 'red-border' : 'none'}
      />
      {errors.kennelName && <p>{errors.kennelName}</p>}
      <InputField
        labelText="Numer PKR"
        htmlFor="pkr"
        type="text"
        placeholder="&#xF007; Numer PKR"
        id="pkr"
        required
        value={formData.pkr}
        onChange={handleInputChange}
        className={errors.pkr ? 'red-border' : 'none'}
      />
      {errors.pkr && <p>{errors.pkr}</p>}
      <InputField
        labelText="Numer rejestracji oddziałowej"
        htmlFor="registrationNumber"
        type="text"
        placeholder="&#xF007; Numer rejestracji oddziałowej"
        id="registrationNumber"
        required
        value={formData.registrationNumber}
        onChange={handleInputChange}
        className={errors.registrationNumber ? 'red-border' : 'none'}
      />
      {errors.registrationNumber && <p>{errors.registrationNumber}</p>}
      <InputField
        labelText="Rasa psa"
        htmlFor="breed"
        type="text"
        placeholder="&#xF007; Rasa psa"
        id="breed"
        required
        value={formData.breed}
        onChange={handleInputChange}
        className={errors.breed ? 'red-border' : 'none'}
      />
      {errors.breed && <p>{errors.breed}</p>}
      <InputField
        labelText="Data urodzenia"
        htmlFor="dateOfBirth"
        type="date"
        placeholder="&#xF007; dateOfBirth"
        id="dateOfBirth"
        required
        value={formData.dateOfBirth}
        onChange={handleInputChange}
        className={errors.dateOfBirth ? 'red-border' : 'none'}
      />
      {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
      <InputField
        labelText="Maść psa"
        htmlFor="color"
        type="text"
        placeholder="&#xF007; Maść psa"
        id="color"
        required
        value={formData.color}
        onChange={handleInputChange}
        className={errors.color ? 'red-border' : 'none'}
      />
      {errors.color && <p>{errors.color}</p>}
      <InputField
        labelText="Numer chip lub tatuażu"
        htmlFor="chipOrTattoo"
        type="text"
        placeholder="&#xF007; Numer chip lub tatuażu"
        id="chipOrTattoo"
        required
        value={formData.chipOrTattoo}
        onChange={handleInputChange}
        className={errors.labelText ? 'red-border' : 'none'}
      />
      {errors.chipOrTattoo && <p>{errors.chipOrTattoo}</p>}
      <InputField
        labelText="Podaj płeć psa"
        htmlFor="sex"
        type="text"
        placeholder="&#xF007; Wybierz płeć psa"
        id="sex"
        required
        value={formData.sex}
        onChange={handleInputChange}
        className={errors.sex ? 'red-border' : 'none'}
      />
      {errors.sex && <p>{errors.sex}</p>}
      <InputField
        labelText="Właściciel psa (imię i nazwisko)"
        htmlFor="owner"
        type="text"
        placeholder="&#xF007; Właściciel psa"
        id="owner"
        required
        value={formData.owner}
        onChange={handleInputChange}
        className={errors.owner ? 'red-border' : 'none'}
      />
      {errors.owner && <p>{errors.owner}</p>}
      <MainButton primary text="Zarejestruj psa" />
    </FormWrapper>
  );
};

DogForm.propTypes = {
  submitForm: propTypes.func.isRequired,
  initialState: propTypes.object.isRequired,
};

export default DogForm;
