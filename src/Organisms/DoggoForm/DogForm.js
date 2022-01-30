import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import MainButton from '../../Atoms/MainButton/MainButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const DogForm = () => {
  const initialState = {
    dogName: '',
    kennelName: '',
    pkr: '',
    registrationNumber: '',
    breed: '',
    dateOfBirth: new Date(),
    color: '',
    chipOrTattoo: '',
    sex: 'pies',
    owner: '',
  };

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  navigate(-1);

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
          labelText="Imię rodowodowe psa"
          htmlFor="dogName"
          type="text"
          placeholder="Imię rodowodowe psa"
          id="dogName"
          required
          value={setFormData.dogName}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Przydomek"
          htmlFor="kennelName"
          type="text"
          placeholder="Przydomek"
          id="kennelName"
          value={setFormData.kennelName}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Numer PKR"
          htmlFor="pkr"
          type="text"
          placeholder="Numer PKR"
          id="pkr"
          required
          value={setFormData.pkr}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Numer rejestracji oddziałowej"
          htmlFor="registrationNumber"
          type="text"
          placeholder="Numer rejestracji oddziałowej"
          id="registrationNumber"
          required
          value={setFormData.registrationNumber}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Imię rodowodowe psa"
          htmlFor="dogName"
          type="text"
          placeholder="Imię rodowodowe psa"
          id="dogName"
          required
          value={setFormData.dogName}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Rasa psa"
          htmlFor="breed"
          type="text"
          placeholder="Rasa psa"
          id="breed"
          required
          value={setFormData.breed}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Data urodzenia"
          htmlFor="dateOfBirth"
          type="date"
          placeholder="dateOfBirth"
          id="dateOfBirth"
          required
          value={setFormData.dateOfBirth}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Maść psa"
          htmlFor="color"
          type="text"
          placeholder="Maść psa"
          id="color"
          required
          value={setFormData.color}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Numer chip lub tatuażu"
          htmlFor="chipOrTattoo"
          type="text"
          placeholder="Numer chip lub tatuażu"
          id="chipOrTattoo"
          required
          value={setFormData.chipOrTattoo}
          onChange={handleInputChange}
        />
        <InputField
          labelText="Wybierz płeć psa"
          htmlFor="chipOrTattoo"
          type="radio"
          id="sex"
          required
          value={setFormData.chipOrTattoo}
          onChange={handleInputChange}
        />

        <InputField
          labelText="Właściciel psa (imię i nazwisko)"
          htmlFor="owner"
          type="text"
          placeholder="Właściciel psa"
          id="owner"
          required
          value={setFormData.owner}
          onChange={handleInputChange}
        />
        <MainButton primary text="Zarejestruj psa" />
      </FormWrapper>
    </CardWrapper>
  );
};

export default DogForm;
