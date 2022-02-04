import { useParams } from 'react-router-dom';
import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import contests from '../../Data/MongoDBMock/contests';

const ClassesPage = () => {
  const { contestId } = useParams();
  const contestClasses = contests.find(
    (contest) => contest.contestId === contestId,
  ).obedienceClasses;

  function secondaryBtnHandler() {}

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25}>
      {Object.keys(contestClasses).map((obedienceClass, index) => {
        return (
          <ClassOrDogButton
            key={index}
            contestId={contestId}
            classInfo={{
              obedienceClass,
              dogsAmount: contestClasses[obedienceClass].length,
            }}
          />
        );
      })}
      <MainButton
        onClick={secondaryBtnHandler}
        secondary
        text="ZAKOŃCZ KLASĘ"
      />
    </ColumnWrapper>
  );
};

export default ClassesPage;
