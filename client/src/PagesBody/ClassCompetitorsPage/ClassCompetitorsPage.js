import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import CLASSES from '../../Consts/classesConst';
import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const ClassCompetitorsPage = () => {
  const [dogList, setDogList] = useState(null);
  const { contestId, classId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDogList() {
      const response = await fetch(
        `/api/contests/participants/${contestId}/${classId}`,
        requestOptionsGET,
      );
      if (response) {
        const dogsArr = await response.json();
        console.log(dogsArr);
        setDogList(dogsArr);
      }
    }
    fetchDogList();
  }, []);
  const exercisesAmount = CLASSES[classId].exercises.length;

  console.log(dogList);
  function onClassFinishClick() {
    navigate();
  }

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25}>
      {dogList &&
        dogList.map((dog, index) => {
          const { dogId, dogName, resultsId } = dog;

          console.log(resultsId.exercises);

          const exercisesCompleted = resultsId.exercises.filter(
            (exercise) => exercise.result != null,
          ).length;

          return (
            <ClassOrDogButton
              key={dogId}
              dogInfo={{
                index,
                dogId,
                dogName,
                exercisesCompleted,
                exercisesAmount,
              }}
            />
          );
        })}
      <MainButton onClick={onClassFinishClick} secondary text="ZAKOŃCZ KLASĘ" />
    </ColumnWrapper>
  );
};

export default ClassCompetitorsPage;
