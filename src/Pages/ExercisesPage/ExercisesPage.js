import Backdrop from '../../Atoms/Modal/Backdrop';
import ButtonExercisesContainer from '../../Molecules/ButtonsExcercisenContainer/ButtonsExercisesContainer';
import DOGS from '../../Data/Dummy-data/test-data-dogs';
import ExerciseCardsContainer from '../../Organisms/ExerciseCardsContainter/ExerciseCardsContainer';
import Modal from '../../Organisms/Modal/Modal';
import SpecialButtonsContainer from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainer';
import modalData from '../../Consts/modalData';
import { useState } from 'react';

const ExercisesPage = () => {
  // OUR ROUTE: http://localhost:3000/contests/1/classes/1/Woof
  // so when we click our page we must GET data from database about our dog performance
  // in the future we will use more IDs than other properties

  const [isDisqualifyModalOpen, setIsDisqualifyModalOpen] = useState(false);
  const [isPenaltyModalOpen, setIsPenaltyModalOpen] = useState(false);
  const handleDisqualification = () => {
    setIsDisqualifyModalOpen(false);
  };
  const handlePenalty = () => {
    setIsPenaltyModalOpen(false);
  };
  const openDisqualifyModalHandler = () => {
    setIsDisqualifyModalOpen(true);
  };
  const openPenaltyModalHandler = () => {
    setIsPenaltyModalOpen(true);
  };

  function closeModalHandler() {
    setIsPenaltyModalOpen(false);
    setIsDisqualifyModalOpen(false);
  }

  const ourTestDogName = 'Woof';
  const ourTestDog = DOGS.find((dog) => dog.dogName === ourTestDogName);
  const ourTestContestName = 'XII Zawody im. Pana Starosty';
  const ourTestPerformanceObject = ourTestDog.performances.find(
    (performance) => performance.contestName == ourTestContestName,
  );

  return (
    <>
      {(isDisqualifyModalOpen || isPenaltyModalOpen) && (
        <Modal
          modalData={
            isDisqualifyModalOpen ? modalData.disqualify : modalData.penalty
          }
          onCloseHandler={closeModalHandler}
          onConfirmHandler={
            isDisqualifyModalOpen ? handleDisqualification : handlePenalty
          }
        />
      )}
      {(isDisqualifyModalOpen || isPenaltyModalOpen) && (
        <Backdrop onClick={closeModalHandler} />
      )}

      <SpecialButtonsContainer
        openDisqualifyModalHandler={openDisqualifyModalHandler}
        openPenaltyModalHandler={openPenaltyModalHandler}
      />

      <ExerciseCardsContainer
        performanceObject={ourTestPerformanceObject}
      ></ExerciseCardsContainer>
    </>
  );
};

export default ExercisesPage;
