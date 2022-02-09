import { useContext, useState } from 'react';

import CLASSES from '../../Consts/classesConst';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { ContestContext } from '../../Context/ContestContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';

const ClassChoicePage = () => {
  const { contestState } = useContext(ContestContext);
  const { contestId } = contestState;
  console.log(contestState);
  const classesArr = CLASSES.map((elem) => elem.name);
  const [selectedClass, setSelectedClass] = useState('');
  const clickHandler = (index) => {
    setSelectedClass(index);
    console.log('setClass to ' + index);
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

      {/* <FakeButton
        text={'Wyślij formularz'}
        secondary="secondary"
        to={`./${selectedClass}/confirmation-summary`}
      /> */}

      {/* contests/:contestId/classes/:classId/leaderboard */}
      <FakeButton
        text={'Pokaż wyniki'}
        secondary="secondary"
        to={`../contests/${contestId}/classes/${selectedClass}/leaderboard`}
      />
    </ColumnWrapper>
  );
};

export default ClassChoicePage;
