import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import CLASSES from '../../Consts/classesConst';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import { UserDataContext } from '../../Context/UserDataContext';
import { postApplication } from '../../Tools/FetchData/fetchFormsFunctions';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import EnterCompetitionContainer from '../../Organisms/EnterCompetitionContainer/EnterCompetitionContainer';

const ClassChoicePage = () => {
  const { contestState } = useContext(ContestContext);
  const { dispatch, state } = useContext(UserDataContext);
  const { dogState } = useContext(DogContext);
  const { isAuthenticated, userId } = state;
  const { contestId, contestName } = contestState;
  const { chosenDog } = dogState;

  const [selectedClass, setSelectedClass] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [classesArr, setClassesArr] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function getClasses() {
      const response = await fetch(
        `api/contests/classes/${contestId}`,
        requestOptionsGET,
      );
      if (response.status === 200) {
        const obedienceClassesObject = await response.json();
        let classes = [];
        if (obedienceClassesObject.length > 0) {
          obedienceClassesObject.forEach((element) => {
            classes.push(element.classNumber);
          });
        }
        setClassesArr(classes);
      } else {
        alert('Ooops, coś poszło nie tak');
      }
    }
    getClasses();
  }, []);

  const clickHandler = (event, index) => {
    event.preventDefault();
    setSelectedClass(index);
  };

  const linkTo = () => {
    if (selectedClass !== undefined) {
      if (!location.state) {
        return `../contests/${contestId}/classes/${selectedClass}/leaderboard`;
      }
    } else {
      return '';
    }
  };

  const sendApplication = async (event) => {
    event.preventDefault();
    if (selectedClass) {
      const exercisesArr = CLASSES[selectedClass].exercises.map((exercise) => ({
        codeName: exercise.codeName,
        result: null,
      }));
      const body = {
        contestId: contestId,
        contestName: contestName,
        obedienceClass: selectedClass,
        dogId: chosenDog.dogId,
        dogName: chosenDog.dogName,
        participantId: userId,
        exercises: exercisesArr,
      };

      const isSuccess = await postApplication(body);

      if (isSuccess) {
        setConfirmation(true);
        navigate('/confirmation');
      }
    }
  };

  const enterCompetitionClassChoice = () => {
    return dogState.chosenDog !== {} && contestState.contestId !== null
      ? '-enter-competition'
      : '';
  };

  return (
    <ColumnWrapper className={`class-choice${enterCompetitionClassChoice()}`}>
      <ColumnWrapper
        paddingLeftRight={1}
        paddingTop={0.25}
        contentPosition={isAuthenticated}
        maxWidthBigScreen={35}
        className={`class-choice-wrapper${enterCompetitionClassChoice()}`}
      >
        {classesArr &&
          classesArr.map((obedienceClass, index) => {
            return (
              <MainButton
                onClick={(event) => clickHandler(event, obedienceClass)}
                key={index}
                style={{ height: '75px' }}
                text={`Klasa ${obedienceClass}`}
                ternary
                justifyText={'left'}
                className="selected-btn"
              />
            );
          })}
        {classesArr && location.state && (
          <MainButton
            text={'WYŚLIJ FORMULARZ'}
            secondary
            onClick={(event) => sendApplication(event)}
          />
        )}
        {classesArr && !location.state && (
          <FakeButton text={'Pokaż wyniki'} colors="secondary" to={linkTo()} />
        )}
      </ColumnWrapper>
      {contestState.contestId !== null && (
        <EnterCompetitionContainer
          selectedClass={selectedClass}
          confirmation={confirmation}
        />
      )}
    </ColumnWrapper>
  );
};

export default ClassChoicePage;
