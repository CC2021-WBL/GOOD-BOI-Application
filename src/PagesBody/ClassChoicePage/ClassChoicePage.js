import { useContext, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { ContestContext } from '../../Context/ContestContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import contests from './../../Data/MongoDBMock/contests';
import { useLocation } from 'react-router-dom';

const ClassChoicePage = () => {
  const { contestState } = useContext(ContestContext);
  const [selectedClass, setSelectedClass] = useState('');
  const location = useLocation();

  const { contestId } = contestState;
  const classesArr = contests.find(
    (contest) => contest.contestId === contestId,
  ).obedienceClasses;

  const clickHandler = (index) => {
    console.log(index);
    setSelectedClass(index);
  };

  const linkTo = () => {
    if (selectedClass !== undefined) {
      if (!location.state) {
        return `../contests/${contestId}/classes/${selectedClass}/leaderboard`;
      } else if (location.state.application) {
        return `/confirmation`;
      }
    } else {
      return '';
    }
  };

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25}>
      {Object.keys(classesArr).map((obedienceClass, index) => {
        return (
          <MainButton
            onClick={() => clickHandler(obedienceClass)}
            key={index}
            style={{ height: '75px' }}
            text={`Klasa ${obedienceClass}`}
            ternary
            justifyText={'left'}
            className="selected-btn"
          />
        );
      })}
      {location.state && (
        <FakeButton
          text={'WYŚLIJ FORMULARZ'}
          colors="secondary"
          to={linkTo()}
        />
      )}
      {!location.state && (
        <FakeButton text={'Pokaż wyniki'} colors="secondary" to={linkTo()} />
      )}
    </ColumnWrapper>
  );
};

export default ClassChoicePage;
