import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

import TextArea from '../../Atoms/TextArea/TextArea';
import MainButton from '../../Atoms/MainButton/MainButton';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import CheckboxAgreeField from '../../Atoms/CheckboxAgreeField/CheckboxAgreeField';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const emailRgx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const ContactForm = () => {
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
    if (!emailRgx.test(formData.email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: 'Niepoprawny adres email',
      }));
      isFormValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, email: '' }));
    }

    if (formData.message.length < 20) {
      setErrors((prevState) => ({
        ...prevState,
        message: 'Twoja wiadomość musi mieć minimum 20 znaków',
      }));
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
    <ColumnWrapper paddingLeftRight={1}>
      <FormWrapper onSubmit={submitHandler} id="form">
        <InputField
          labelText="* Email"
          htmlFor="email"
          type="email"
          placeholder="&#xf0e0; Email"
          id="email"
          name="email"
          required
          value={setFormData.email}
          onChange={handleInputChange}
          className={errors.email ? 'redBorder' : 'none'}
        />
        {errors.email && <p>{errors.email}</p>}
        <TextArea
          labelText="* Wpisz wiadomość"
          htmlFor="message"
          id="message"
          name="message"
          required
          value={setFormData.message}
          onChange={handleInputChange}
          placeholder="Wpisz wiadomość"
          className={errors.message ? 'redBorder' : 'none'}
        />
        {errors.message && <p>{errors.message}</p>}

        <CheckboxAgreeField
          text="* Zapoznałem się z regulaminem GOOD BOI i akceptuję jego postanowienia"
          className={errors.message ? 'redBorder' : 'none'}
        />

        <MainButton primary text="Wyślij wiadomość" />
      </FormWrapper>
    </ColumnWrapper>
  );
};

export default ContactForm;
