import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainButton from '../../Atoms/MainButton/MainButton';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import CheckboxAgreeField from '../../Atoms/CheckboxAgreeField/CheckboxAgreeField';
import TextArea from '../../Atoms/TextArea/TextArea';
import emailjs from '@emailjs/browser';
const emailRgx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const ContactFormPage = () => {
  const initialState = {
    email: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({
    email: '',
    message: '',
  });
  const validateForm = () => {
    let isFormValid = true;
    if (!formData.email) {
      setErrors((prevState) => ({ ...prevState, email: 'Brak maila' }));
      isFormValid = false;
    } else if (!emailRgx.test(formData.email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: 'Niepoprawny adres email',
      }));
      isFormValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, email: '' }));
    }

    if (!formData.message) {
      setErrors((prevState) => ({ ...prevState, message: 'Brak wiadomosci' }));
      isFormValid = false;
    } else if (formData.message.length < 5) {
      setErrors((prevState) => ({ ...prevState, message: 'za krotko' }));
      isFormValid = false;
    } else {
      setErrors({ ...errors, message: '' });
    }
    return isFormValid;
  };

  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    const isFormValid = validateForm();
    if (!isFormValid) return;
    emailjs
      .sendForm(
        'service_ypr0zj8',
        'template_z0d7tqj',
        event.target,
        'user_pR6XzZUshqc9XuxuBLUzf',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    navigate('/');
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <CardWrapper>
      <FormWrapper onSubmit={submitHandler} id="form">
        <InputField
          labelText="Email"
          htmlFor="email"
          type="email"
          placeholder="&#xf0e0; Email"
          id="email"
          name="email"
          required
          value={setFormData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <TextArea
          labelText="Wpisz wiadomość"
          htmlFor="message"
          id="message"
          name="message"
          required
          value={setFormData.message}
          onChange={handleInputChange}
          placeholder="Wpisz wiadomość"
        />
        {errors.message && <p>{errors.message}</p>}

        <CheckboxAgreeField text="Zapoznałem się z regulaminem GOOD BOI i akceptuję jego postanowienia" />
        {/* TODO: moze tu tez error? Oraz brakuje info co jest wymagane i ostylowanie inputow ktore sa niepoprawne */}
        <MainButton primary text="Wyślij wiadomość" />
      </FormWrapper>
    </CardWrapper>
  );
};

export default ContactFormPage;
