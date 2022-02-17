import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import contests from '../../Data/MongoDBMock/contests';
import useMemoryState from '../../Hooks/useMemoryState';

const classesCompleteness = {};

const ClassesPage = () => {
  const [classesState, onChange] = useMemoryState('classesStatus', null);
  const [classesStatus, setClassesStatus] = useState(null);
  const { contestId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const contestClasses = contests.find(
    (contest) => contest.contestId === contestId,
  ).obedienceClasses;

  useEffect(() => {
    if (location.state) {
      const classNumber = Object.keys(location.state)[0];
      const classValue = location.state[classNumber];
      setClassesStatus((prevClassesStatus) => ({
        ...prevClassesStatus,
        [classNumber]: classValue,
      }));
    }
  }, []);

  useEffect(() => {
    for (const classNumber in classesStatus) {
      if (
        classesStatus[classNumber].toString() === 'true' ||
        (classesState[classNumber] &&
          classesState[classNumber].toString() === 'true')
      ) {
        classesCompleteness[classNumber] = true;
      }
    }
    onChange(classesCompleteness);
  }, [classesStatus]);

  function onClickFinish() {
    navigate('/contests');
  }
  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25}>
      {Object.keys(contestClasses).map((obedienceClass, index) => {
        console.log(JSON.stringify(classesState));
        //console.log(JSON.stringify(classesState[1]));
        //console.log(JSON.stringify(classesState[obedienceClass]));
        let isCompleted = false;

        if (
          classesCompleteness[obedienceClass] ||
          (classesState && classesState[obedienceClass])
        ) {
          isCompleted = true;
        }
        return (
          <ClassOrDogButton
            key={index}
            contestId={contestId}
            classInfo={{
              obedienceClass,
              dogsAmount: contestClasses[obedienceClass].length,
              isCompleted: isCompleted,
            }}
          />
        );
      })}
      {console.log('rampampam')}
      <MainButton onClick={onClickFinish} secondary text="ZAKOŃCZ KONKURS" />
    </ColumnWrapper>
  );
};

export default ClassesPage;
