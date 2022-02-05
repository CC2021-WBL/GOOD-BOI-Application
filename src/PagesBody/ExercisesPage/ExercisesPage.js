import Backdrop from '../../Atoms/Modal/Backdrop';
import ButtonExercises from '../../Atoms/ButtonsExercises/ButtonsExercises';
import ButtonExercisesContainerStyled from '../../Molecules/ButtonsExcercisenContainer/ButtonExercisesContainerStyled';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
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
  const [isEvaluationModalOpen, setIsEvaluationModalOpen] = useState(false);

  const handleDisqualification = () => {
    setIsDisqualifyModalOpen(false);
  };
  const handlePenalty = () => {
    setIsPenaltyModalOpen(false);
  };

  const handleEvaluation = () => {
    setIsEvaluationModalOpen(false);
  };
  const openDisqualifyModalHandler = () => {
    setIsDisqualifyModalOpen(true);
  };
  const openPenaltyModalHandler = () => {
    setIsPenaltyModalOpen(true);
  };

  const openEvaluationModalHandler = () => {
    setIsPenaltyModalOpen(true);
  };

  function closeModalHandler() {
    setIsPenaltyModalOpen(false);
    setIsDisqualifyModalOpen(false);
    setIsEvaluationModalOpen(false);
  }

  const ourTestDogName = 'Woof';
  const ourTestDog = DOGS.find((dog) => dog.dogName === ourTestDogName);
  const ourTestContestName = 'XII Zawody im. Pana Starosty';
  const ourTestPerformanceObject = ourTestDog.performances.find(
    (performance) => performance.contestName === ourTestContestName,
  );

  return (
    <ColumnWrapper>
      {isDisqualifyModalOpen && (
        <Modal
          modalData={modalData.disqualify}
          onCloseHandler={closeModalHandler}
          onConfirmHandler={handleDisqualification}
        />
      )}
      {isPenaltyModalOpen && (
        <Modal
          modalData={modalData.penalty}
          onCloseHandler={closeModalHandler}
          onConfirmHandler={handlePenalty}
        />
      )}
      {isEvaluationModalOpen && (
        <Modal
          modalData={modalData.endEvaluation}
          onCloseHandler={closeModalHandler}
          onConfirmHandler={handleEvaluation}
        />
      )}
      {(isDisqualifyModalOpen ||
        isPenaltyModalOpen ||
        isEvaluationModalOpen) && <Backdrop onClick={closeModalHandler} />}
      <ColumnWrapper paddingLeftRight={0.25}>
        <SpecialButtonsContainerStyled>
          <SpecialButton
            text="Dyskwalifikacja"
            theme="red"
            handler={openDisqualifyModalHandler}
            roundedBorder="left"
          />
          <SpecialButton
            text="-10 punktów"
            theme="yellow"
            handler={openPenaltyModalHandler}
            roundedBorder="right"
          />
        </SpecialButtonsContainerStyled>

        <ExerciseCardsContainer performanceObject={ourTestPerformanceObject} />
      </ColumnWrapper>
      <ButtonExercisesContainerStyled>
        <ButtonExercises secondary text={'Zapisz i wróć do listy'} />
        <ButtonExercises
          handler={openEvaluationModalHandler}
          primary
          text={'Zakończ ocenianie'}
        />
      </ButtonExercisesContainerStyled>{' '}
    </ColumnWrapper>
  );
};

export default ExercisesPage;
