import { useContext, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { ContestContext } from '../../Context/ContestContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import contests from './../../Data/MongoDBMock/contests';

const ClassChoicePage = () => {
  const { contestState } = useContext(ContestContext);
  const { contestId } = contestState;
  const classesArr = contests.find(
    (contest) => contest.contestId === contestId,
  ).obedienceClasses;
  const [selectedClass, setSelectedClass] = useState('');
  const clickHandler = (index) => {
    setSelectedClass(index);
  };

  const linkTo = () => {
    if (selectedClass !== undefined) {
      return `../contests/${contestId}/classes/${selectedClass}/leaderboard`;
    } else {
      return '';
    }
  };

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25}>
      {Object.keys(classesArr).map((obedienceClass, index) => {
        return (
          <MainButton
            onClick={() => clickHandler(index)}
            key={index}
            style={{ height: '75px' }}
            text={`Klasa ${obedienceClass}`}
            ternary
            justifyText={'left'}
            className="selected-btn"
          />
        );
      })}
      <FakeButton text={'Pokaż wyniki'} secondary="secondary" to={linkTo()} />
    </ColumnWrapper>
  );
};

export default ClassChoicePage;
