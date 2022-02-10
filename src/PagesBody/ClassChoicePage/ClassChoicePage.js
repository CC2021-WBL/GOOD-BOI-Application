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
