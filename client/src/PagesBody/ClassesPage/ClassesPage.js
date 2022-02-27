import { useNavigate, useParams } from 'react-router-dom';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import contests from '../../Data/MongoDBMock/contests';

const ClassesPage = () => {
  const { contestId } = useParams();
  const navigate = useNavigate();
  const contestClasses = contests.find(
    (contest) => contest.contestId === contestId,
  ).obedienceClasses;

  function onClickFinish() {
    navigate('/contests');
  }

  return (
    <ColumnWrapper
      paddingLeftRight={1}
      paddingTop={0.25}
      desktop="grid-area: 2 / 4 / 8 / 10"
      mobile="grid-area: 1 / 1 / 2 / 2"
    >
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
      <MainButton onClick={onClickFinish} secondary text="ZAKOŃCZ ZAWODY" />
    </ColumnWrapper>
  );
};

export default ClassesPage;
