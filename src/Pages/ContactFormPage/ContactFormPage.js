import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainButton from '../../Atoms/MainButton/MainButton';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import CheckboxAgreeField from '../../Atoms/CheckboxAgreeField/CheckboxAgreeField';
import TextArea from '../../Atoms/TextArea/TextArea';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // const { email, message } = formData;

  const initialState = {
    email: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialState);
  let errors = {};
  if (!formData.email) {
    errors.email = '';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
  ) {
    errors.email = 'Niepoprawny adres email';
  }
  if (!formData.message) {
    errors.message = '';
  } else if (formData.message.length < 50) {
    errors.message = 'Wiadomość musi mieć minimum 50 znaków';
  }

  const navigate = useNavigate();
  // const form = useRef();
  const submitHandler = (event) => {
    // event.preventDefault();
    // setFormData({
    //   ...formData,
    //   [event.target.id]: event.target.value,
    // });
    // const data = { ...formData };

    // //test, after submit, entered user data
    // console.log(data);
    navigate('/landing');

    event.preventDefault();

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

    console.log(event.target);
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
        <MainButton primary text="Wyślij wiadomość" />
      </FormWrapper>
    </CardWrapper>
  );
};

export default ContactForm;
