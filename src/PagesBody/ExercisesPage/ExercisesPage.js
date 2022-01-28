import Backdrop from '../../Atoms/Modal/Backdrop';
import ButtonExercisesContainer from '../../Molecules/ButtonsExcercisenContainer/ButtonsExercisesContainer';
import DOGS from '../../Data/Dummy-data/test-data-dogs';
import ExerciseCardsContainer from '../../Organisms/ExerciseCardsContainter/ExerciseCardsContainer';
import Modal from '../../Organisms/Modal/Modal';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import modalData from '../../Consts/modalData';
import { useState } from 'react';

const ExercisesPage = () => {
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
    <ColumnWrapper>
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

      <SpecialButtonsContainerStyled>
        <SpecialButton
          text="Dyskwalifikacja"
          theme="red"
          handler={openDisqualifyModalHandler}
          left
        />
        <SpecialButton
          text="-10 punktów"
          theme="yellow"
          handler={openPenaltyModalHandler}
          right
        />
      </SpecialButtonsContainerStyled>
      <ColumnWrapper paddingLeftRight={0.25}>
        <SpecialButtonsContainer
          openDisqualifyModalHandler={openDisqualifyModalHandler}
          openPenaltyModalHandler={openPenaltyModalHandler}
        />
        <ExerciseCardsContainer performanceObject={ourTestPerformanceObject} />
      </ColumnWrapper>

      <ButtonExercisesContainer />
    </ColumnWrapper>
  );
};

export default ExercisesPage;
