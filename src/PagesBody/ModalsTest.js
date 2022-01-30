import Backdrop from '../Atoms/Modal/Backdrop';
import Modal from '../Organisms/Modal/Modal';
import modalData from '../Consts/modalData';
import styled from 'styled-components';
import { useState } from 'react';

const ModalsTestWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    width: 20%;
    height: 100px;
  }
`;

const ModalsTest = () => {
  const [isGoodRegistrationModalOpen, setGoodRegistraionModalOpen] =
    useState(false);
  const [isBadRegistrationModalOpen, setBadRegistrationModalOpen] =
    useState(false);
  const [isEndEvaluationModalOpen, setEndEvaluationModalOpen] = useState(false);
  const [isEndContestModalOpen, setEndContestModalOpen] = useState(false);

  const handlegoodRegistration = () => {
    console.log(`witaj`);
    setGoodRegistraionModalOpen(false);
  };
  const openGoodRegistrationHandler = () => {
    console.log('przygotuj się do rejestracji');
    setGoodRegistraionModalOpen(true);
  };

  const handleBadRegistration = () => {
    console.log(`spróbuj ponownie`);
    setBadRegistrationModalOpen(false);
  };

  const openBadRegistrationHandler = () => {
    console.log('coś poszło nie tak');
    setBadRegistrationModalOpen(true);
  };

  const handleEndEvaluation = () => {
    console.log('zakończ ocenianie');
    setEndEvaluationModalOpen(false);
  };

  const openEndEvaluationHandler = () => {
    console.log('na pewno koniec ewaluacji?');
    setEndEvaluationModalOpen(true);
  };

  const handleEndContest = () => {
    console.log('finito');
    setEndContestModalOpen(false);
  };

  const openEndContestHandler = () => {
    console.log('chcesz zakończyć konkurs?');
    setEndContestModalOpen(true);
  };

  function closeModalHandler() {
    setGoodRegistraionModalOpen(false);
    setBadRegistrationModalOpen(false);
    setEndContestModalOpen(false);
    setEndEvaluationModalOpen(false);
  }
  return (
    <ModalsTestWrapper>
      {(isBadRegistrationModalOpen ||
        isGoodRegistrationModalOpen ||
        isEndEvaluationModalOpen ||
        isEndContestModalOpen) && (
        <Modal
          modalData={
            isBadRegistrationModalOpen
              ? modalData.badRegistration
              : isEndEvaluationModalOpen
              ? modalData.endEvaluation
              : isEndContestModalOpen
              ? modalData.endContest
              : modalData.goodRegistration
          }
          onCloseHandler={closeModalHandler}
          onConfirmHandler={
            isBadRegistrationModalOpen
              ? handleBadRegistration
              : isEndEvaluationModalOpen
              ? handleEndEvaluation
              : isEndContestModalOpen
              ? handleEndContest
              : handlegoodRegistration
          }
        />
      )}
      {(isBadRegistrationModalOpen ||
        isGoodRegistrationModalOpen ||
        isEndContestModalOpen ||
        isEndEvaluationModalOpen) && <Backdrop onClick={closeModalHandler} />}
      <button
        className="goodRegistration"
        onClick={openGoodRegistrationHandler}
      >
        goodRegistration
      </button>
      <button className="badRegistration" onClick={openBadRegistrationHandler}>
        badRegistration
      </button>
      <button className="endEvaluation" onClick={openEndEvaluationHandler}>
        endEvaluation
      </button>
      <button className="endContest" onClick={openEndContestHandler}>
        endContest
      </button>
    </ModalsTestWrapper>
  );
};
export default ModalsTest;
