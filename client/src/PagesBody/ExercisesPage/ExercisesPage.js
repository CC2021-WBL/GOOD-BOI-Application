import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Backdrop from '../../Atoms/Modal/Backdrop';
import ButtonExercises from '../../Atoms/ButtonsExercises/ButtonsExercises';
import ButtonExercisesContainerStyled from '../../Molecules/ButtonsExcercisenContainer/ButtonExercisesContainerStyled';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ErrorComponent from '../ErrorPage/ErrorComponent';
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
  const [fetchErrors, setFetchErrors] = useState(null);
  const { label } = locationPath.state;

  useEffect(() => {
    async function fetchResults() {
      try {
        const resultDoc = await getExercisesPoints(dogId, contestId);
        setDogPerformance({ exercises: resultDoc.exercises });
        setResultId(resultDoc._id);
      } catch (error) {
        setFetchErrors(error.message);
      }
    }
    fetchResults();
  }, []);

  useEffect(() => {
    if (penaltyPoints < -10) {
      navigate('./dog-summary', {
        state: {
          dogPerformance: { dogPerformance },
          resultId: resultId,
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
        resultId: resultId,
      },
    });
  };
  const handlePenalty = () => {
    setIsPenaltyModalOpen(false);
    setPenaltyPoints(penaltyPoints - 10);
    dogPerformance.specialState = penaltyPoints - 10;
  };

  const navigate = useNavigate();

  const handleEvaluation = (event) => {
    event.preventDefault();
    setIsEvaluationModalOpen(false);
    dogPerformance.specialState = penaltyPoints;
    navigate('./dog-summary', {
      state: {
        text: 'Tabela Wyników',
        label: `${label}`,
        dogPerformance: { dogPerformance },
        resultId: resultId,
      },
    });
  };
  const openDisqualifyModalHandler = (event) => {
    event.preventDefault();
    setIsDisqualifyModalOpen(true);
  };
  const openPenaltyModalHandler = (event) => {
    event.preventDefault();
    setIsPenaltyModalOpen(true);
  };

  const openEvaluationModalHandler = async (event) => {
    event.preventDefault();
    const isUpdated = await updateExercisesPoints(resultId, dogPerformance);
    if (isUpdated) {
      setIsEvaluationModalOpen(true);
    }
  };

  function closeModalHandler(event) {
    event.preventDefault();
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

    const saveDataHandler = async () => {
    const isUpdated = await updateExercisesPoints(resultId, dogPerformance);
    console.log(isUpdated);
  };

  return (
    <>
      {fetchErrors ? (
        <ErrorComponent message={fetchErrors} />
      ) : (
        <>
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
              isEvaluationModalOpen) && (
              <Backdrop onClick={closeModalHandler} />
            )}
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
                  dogPerformance={dogPerformance.exercises}
                    setDogPerformance={setDogPerformance}
                    saveDataHandler={saveDataHandler}
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
        </>
      )}
    </>
  );
};

export default ExercisesPage;
