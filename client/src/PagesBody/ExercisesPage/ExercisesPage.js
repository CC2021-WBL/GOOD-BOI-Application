import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Backdrop from '../../Atoms/Modal/Backdrop';
import ButtonExercises from '../../Atoms/ButtonsExercises/ButtonsExercises';
import ButtonExercisesContainerStyled from '../../Molecules/ButtonsExcercisenContainer/ButtonExercisesContainerStyled';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ExerciseCardsContainer from '../../Organisms/ExerciseCardsContainter/ExerciseCardsContainer';
import Modal from '../../Organisms/Modal/Modal';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import modalData from '../../Consts/modalData';
import {
  getExercisesPoints,
  updateExercisesPoints,
} from '../../Tools/FetchData/fetchContestsfunctions';

const ExercisesPage = () => {
  const [isDisqualifyModalOpen, setIsDisqualifyModalOpen] = useState(false);
  const [isPenaltyModalOpen, setIsPenaltyModalOpen] = useState(false);
  const [isEvaluationModalOpen, setIsEvaluationModalOpen] = useState(false);
  let [penaltyPoints, setPenaltyPoints] = useState(0);
  const [disqualified, setDisqualified] = useState(false);
  const [dogPerformance, setDogPerformance] = useState(null);
  const [resultId, setResultId] = useState(null);
  const { contestId, dogId } = useParams();
  const locationPath = useLocation();

  const { label, results } = locationPath.state;

  useEffect(() => {
    if (!results) {
      getExercisesPoints(dogId, contestId, setDogPerformance, setResultId);
    } else {
      setDogPerformance(results.exercises);
      setResultId(results._id);
    }
  }, []);

  useEffect(() => {
    if (penaltyPoints < -10) {
      navigate('./dog-summary', {
        state: {
          dogPerformance: { dogPerformance },
        },
      });
    }
  }, [penaltyPoints, disqualified]);

  const handleDisqualification = () => {
    setIsDisqualifyModalOpen(false);
    setDisqualified(true);
    dogPerformance.specialState = 'dyskwalifikacja';
    navigate('./dog-summary', {
      state: {
        dogPerformance: { dogPerformance },
      },
    });
  };
  const handlePenalty = () => {
    setIsPenaltyModalOpen(false);
    setPenaltyPoints(penaltyPoints - 10);
    dogPerformance.specialState = penaltyPoints - 10;
  };

  const navigate = useNavigate();

  const handleEvaluation = () => {
    setIsEvaluationModalOpen(false);
    dogPerformance.specialState = penaltyPoints;
    navigate('./dog-summary', {
      state: {
        text: 'Tabela Wyników',
        label: `${label}`,
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

  const saveAndGoBackHandler = async (event) => {
    event.preventDefault();
    const isUpdated = await updateExercisesPoints(resultId, dogPerformance);
    if (isUpdated) {
      navigate(-1);
    }
  };

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
            colors="red"
            handler={openDisqualifyModalHandler}
            roundedBorder="left"
          />
          <SpecialButton
            text={`Żółta kartka`}
            colors="yellow"
            handler={openPenaltyModalHandler}
            roundedBorder="right"
          />
        </SpecialButtonsContainerStyled>

        {dogPerformance && (
          <ExerciseCardsContainer
            dogPerformance={dogPerformance}
            setDogPerformance={setDogPerformance}
          />
        )}
      </ColumnWrapper>
      <ButtonExercisesContainerStyled>
        <ButtonExercises
          handler={saveAndGoBackHandler}
          secondary
          text={'Zapisz i wróć do listy'}
        />
        <ButtonExercises
          handler={openEvaluationModalHandler}
          primary
          text={'Zakończ ocenianie'}
          dogPerformance={dogPerformance}
        />
      </ButtonExercisesContainerStyled>
    </ColumnWrapper>
  );
};

export default ExercisesPage;
