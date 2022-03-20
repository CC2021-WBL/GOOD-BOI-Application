import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Backdrop from '../../Atoms/Modal/Backdrop';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import MainButton from '../../Atoms/MainButton/MainButton';
import Modal from '../Modal/Modal';
import modalData from '../../Consts/modalData';

const emailRgx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const ForgotPassForm = () => {
  const [email, setEmail] = useState('');
  const [isPassReminderModalOpen, setIsPassReminderModalOpen] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({ email: '' });

  // TODO: db check if email is saved
  const validateForm = () => {
    let isFormValid = true;
    if (!emailRgx.test(email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: 'Niepoprawny adres email',
      }));
      isFormValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, email: '' }));
    }
    return isFormValid;
  };

  const openPassReminderModal = () => {
    const isFormValid = validateForm();
    if (!isFormValid) return;
    setIsPassReminderModalOpen(true);
  };

  function closeModalHandler() {
    setIsPassReminderModalOpen(false);
  }

  const handleReminder = (event) => {
    event.preventDefault();
    setIsPassReminderModalOpen(false);
    handleSubmit(event);
    const data = { email };
    console.log(data);
    navigate('/login');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ColumnWrapper maxWidthBigScreen={35} className="forgot-wrapper">
      {isPassReminderModalOpen && (
        <Modal
          modalData={modalData.passReminder}
          onCloseHandler={handleReminder}
          onConfirmHandler={handleReminder}
        />
      )}
      {isPassReminderModalOpen && <Backdrop onClick={closeModalHandler} />}

      <ColumnWrapper paddingLeftRight={1}>
        <FormWrapper onSubmit={handleSubmit}>
          <p className="forgot-pass">Zapomniałeś hasła ?</p>
          <div className="forgot-pass-text">
            Podaj email na który mamy wysłać przypomnienie
          </div>
          <InputField
            labelText="Email"
            htmlFor="email"
            type="email"
            placeholder="&#xf0e0; Email"
            id="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={errors.email ? 'red-border' : 'none'}
          />
          {errors && <p>{errors.email}</p>}
          <MainButton
            primary
            text="Przypomnij Hasło"
            onClick={openPassReminderModal}
          />
        </FormWrapper>
      </ColumnWrapper>
    </ColumnWrapper>
  );
};

export default ForgotPassForm;
