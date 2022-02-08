import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Backdrop from '../../Atoms/Modal/Backdrop';
import ButtonExercises from '../../Atoms/ButtonsExercises/ButtonsExercises';
import ButtonExercisesContainerStyled from '../../Molecules/ButtonsExcercisenContainer/ButtonExercisesContainerStyled';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ExerciseCardsContainer from '../../Organisms/ExerciseCardsContainter/ExerciseCardsContainer';
import Modal from '../../Organisms/Modal/Modal';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import contests from '../../Data/MongoDBMock/contests';
import modalData from '../../Consts/modalData';
import results from '../../Data/MongoDBMock/results';

const ExercisesPage = () => {
  const [isDisqualifyModalOpen, setIsDisqualifyModalOpen] = useState(false);
  const [isPenaltyModalOpen, setIsPenaltyModalOpen] = useState(false);
  const [isEvaluationModalOpen, setIsEvaluationModalOpen] = useState(false);
  let [penaltyPoints, setPenaltyPoints] = useState(0);
  const [disqualified, setDisqualified] = useState(false);

  useEffect(() => {
    console.log('useEffect dogPerformance changed');
    console.log('useEffect penalty ' + penaltyPoints);
    console.log('useEffect disqualified ' + disqualified);
    if (penaltyPoints < -10) {
      alert('Uwaga! Podwójna żółta kartka! Dyskwalifikacja!');
      console.log(dogPerformance);
      navigate('./dog-summary', {
        state: {
          text: 'Tabela Wyników',
          label: 'Ocena Zawodnika',
          dogPerformance: { dogPerformance },
        },
      });
    }
  }, [penaltyPoints, disqualified]);

  const handleDisqualification = () => {
    setIsDisqualifyModalOpen(false);
    setDisqualified(true);
    dogPerformance.specialState = 'dyskwalifikacja';
    console.log('disqualified ' + disqualified);
    navigate('./dog-summary', {
      state: {
        text: 'Tabela Wyników',
        label: 'Ocena Zawodnika',
        dogPerformance: { dogPerformance },
      },
    });
  };
  const handlePenalty = () => {
    setIsPenaltyModalOpen(false);
    setPenaltyPoints(penaltyPoints - 10);
    dogPerformance.specialState = penaltyPoints - 10;
    console.log('handlePenalty ' + penaltyPoints);
  };

  const navigate = useNavigate();

  const handleEvaluation = () => {
    setIsEvaluationModalOpen(false);
    dogPerformance.specialState = penaltyPoints;
    navigate('./dog-summary', {
      state: {
        text: 'Tabela Wyników',
        label: 'Ocena Zawodnika',
        dogPerformance: { dogPerformance },
      },
    });
  };
  const openDisqualifyModalHandler = () => {
    setIsDisqualifyModalOpen(true);
  };
  const openPenaltyModalHandler = () => {
    setIsPenaltyModalOpen(true);
  };

  const openEvaluationModalHandler = () => {
    setIsEvaluationModalOpen(true);
  };

  function closeModalHandler() {
    setIsPenaltyModalOpen(false);
    setIsDisqualifyModalOpen(false);
    setIsEvaluationModalOpen(false);
  }

  const goBackHandler = () => {
    navigate(-1);
  };

  const { contestId, classId, dogId } = useParams();

  const contestResults = contests.find(
    (contest) => contest.contestId === contestId,
  ).obedienceClasses[classId];

  const competingPairsId = contestResults.find(
    (dog) => dog.dogId === dogId,
  ).competingPairsId;

  const dogPerformance = results.find(
    (performance) => performance.competingPairsId === competingPairsId,
  ).exercises;

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

        <ExerciseCardsContainer dogPerformance={dogPerformance} />
      </ColumnWrapper>
      <ButtonExercisesContainerStyled>
        <ButtonExercises
          handler={goBackHandler}
          secondary
          text={'Zapisz i wróć do listy'}
        />
        <ButtonExercises
          handler={openEvaluationModalHandler}
          primary
          text={'Zakończ ocenianie'}
          dogPerformance={dogPerformance} //////
        />
      </ButtonExercisesContainerStyled>
    </ColumnWrapper>
  );
};

export default ExercisesPage;
