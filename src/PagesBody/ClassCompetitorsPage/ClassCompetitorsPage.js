import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import { useParams } from 'react-router-dom';
import contests from '../../Data/MongoDBMock/contests';
import results from '../../Data/MongoDBMock/results';
import CLASSES from '../../Consts/classesConst';

const ClassCompetitorsPage = () => {
  const { contestId, classId } = useParams();
  const dogList = contests.find((contest) => contest.contestId === contestId)
    .obedienceClasses[classId];
  const exercisesAmount = CLASSES[classId].exercises.length;

  function secondaryBtnHandler() {
    console.log('secondary button clicked'); // TODO
  }

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25}>
      {dogList.map((dog, index) => {
        const { dogId, dogName, competingPairsId } = dog;

        const dogPerformance = results.find(
          (result) => result.competingPairsId === competingPairsId,
        );

        const exercisesCompleted = dogPerformance.exercises.filter(
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
      <MainButton
        onClick={secondaryBtnHandler}
        secondary
        text="ZAKOŃCZ KONKURS"
      />
    </ColumnWrapper>
  );
};

export default ClassCompetitorsPage;
