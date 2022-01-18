import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import SpecialButtonsContainer from '../../Molecules/SpecialButtonsContainer';
import Modals from '../../Organisms/Modals/Modals';
import { useState } from 'react';
import Backdrop from '../../Organisms/Modals/Backdrop';
const ExercisesPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <CardWrapper>
      <div>
        <h1 aria-hidden="true" onClick={openModalHandler}>
          I am a Excersises Page Component
        </h1>
        <SpecialButtonsContainer></SpecialButtonsContainer>
      </div>
      {modalIsOpen && (
        <Modals
          modalTitle="Are you sure?"
          modalAbout="bbbb"
          modalConfirmation="na pewno?"
          modalBack="wróć"
          yellow
          onClick={closeModalHandler}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </CardWrapper>
  );
};

export default ExercisesPage;
