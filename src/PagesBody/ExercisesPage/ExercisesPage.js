import Backdrop from '../../Atoms/Modal/Backdrop';
import ButtonExercisesContainer from '../../Molecules/ButtonsExcercisenContainer/ButtonsExercisesContainer';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ExerciseCardsContainer from '../../Organisms/ExerciseCardsContainter/ExerciseCardsContainer';
import Modal from '../../Organisms/Modal/Modal';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import modalData from '../../Consts/modalData';
import results from '../../Data/MongoDBMock/results';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ExercisesPage = () => {
  const { contestId, classId, dogId } = useParams();

  const obedienceClass = classId;
  const dogName = dogId;
  const performanceArray = results
    .filter((performance) => performance.contestId === contestId)
    .filter((performance) => performance.obedienceClass == obedienceClass)
    .filter((performance) => performance.dogName === dogName)[0];
  console.log('performanceArray z local storage');
  console.log(performanceArray);

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

  if (performanceArray) {
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
        <ColumnWrapper paddingLeftRight={0.25}>
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

          <ExerciseCardsContainer performanceObject={performanceArray} />
        </ColumnWrapper>

        <ButtonExercisesContainer />
      </ColumnWrapper>
    );
  } else {
    return (
      <>
        <h2>
          <br></br>Error! Brak danych dla tej kombinacji klasy i psa!
        </h2>
      </>
    );
  }
};

export default ExercisesPage;
