import CLASSES from '../../Consts/classesConst';
import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import contests from '../../Data/MongoDBMock/contests';
import results from '../../Data/MongoDBMock/results';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const complentessSet = new Set();

const ClassCompetitorsPage = () => {
  const { contestId, classId } = useParams();
  const navigate = useNavigate();
  const dogList = contests.find((contest) => contest.contestId === contestId)
    .obedienceClasses[classId];
  const exercisesAmount = CLASSES[classId].exercises.length;

  function onClassFinishClick() {
    const isClassCompleted = complentessSet.has(false) ? false : true;
    navigate(`/contests/${contestId}/classes`, {
      state: { [classId]: isClassCompleted },
    });
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

        if (exercisesCompleted === exercisesAmount) {
          complentessSet.add('true');
        } else {
          complentessSet.add('false');
        }

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
