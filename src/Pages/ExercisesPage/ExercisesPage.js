import { useState } from 'react';

import modalData from '../../Consts/modalData';
import Modal from '../../Organisms/Modals/Modal';
import Backdrop from '../../Organisms/Modals/Backdrop';
import DOGS from '../../Data/Dummy-data/test-data-dogs';
import ExerciseCardsContainer from '../../Organisms/ExerciseCardsContainter/ExerciseCardsContainer';
import SpecialButtonsContainer from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainer';

const ExercisesPage = () => {
  // OUR ROUTE: http://localhost:3000/contests/1/classes/1/Woof
  // so when we click our page we must GET data from database about our dog performance
  // in the future we will use more IDs than other properties

  const [isDisqualifyModalOpen, setIsDisqualifyModalOpen] = useState(false);
  const [isPenaltyModalOpen, setIsPenaltyModalOpen] = useState(false);
  const handleDesqualification = () => {
    console.log(`Doggo o imieniu ${ourTestDogName} wylatuje z konkursu`);
    setIsDisqualifyModalOpen(false);
  };
  const handlePenalty = () => {
    console.log(`Doggo o imieniu ${ourTestDogName} ma mniej o 10pkt`);
    setIsPenaltyModalOpen(false);
  };
  const openDisqualifyModalHandler = () => {
    console.log('disqualification coming');
    setIsDisqualifyModalOpen(true);
  };
  const openPenaltyModalHandler = () => {
    console.log('penalty coming');
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
            isDisqualifyModalOpen ? handleDesqualification : handlePenalty
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
