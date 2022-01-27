import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Backdrop from '../../Atoms/Modal/Backdrop';
import Modal from '../Modal/Modal';
import modalData from '../../Consts/modalData';

const RegistrationFormSuccess = () => {
  const navigate = useNavigate();

  const [isGoodRegistrationModalOpen, setGoodRegistraionModalOpen] =
    useState(true);

  const handlegoodRegistration = () => {
    setGoodRegistraionModalOpen(false);
    navigate('/login');
  };

  function closeModalHandler() {
    setGoodRegistraionModalOpen(false);
    navigate('/');
  }
  return (
    <>
      {isGoodRegistrationModalOpen && (
        <Modal
          modalData={modalData.goodRegistration}
          onCloseHandler={closeModalHandler}
          onConfirmHandler={handlegoodRegistration}
        />
      )}
      {isGoodRegistrationModalOpen && <Backdrop onClick={closeModalHandler} />}
    </>
  );
};

export default RegistrationFormSuccess;
