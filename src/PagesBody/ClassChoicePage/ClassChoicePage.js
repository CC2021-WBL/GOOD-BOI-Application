import CLASSES from '../../Consts/CLASSES';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import { useState } from 'react';

// import { useNavigate } from 'react-router-dom';

const ClassChoicePage = () => {
  const classesArr = CLASSES.map((elem) => elem.name);
  const [selectedClass, setClass] = useState('');
  const clickHandler = (index) => {
    setClass(index);
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
          />
        );
      })}

      <FakeButton
        text={`wybrałeś klasę ${selectedClass}`}
        secondary="secondary"
        to={`./${selectedClass}/confirmation-summary`}
      />
    </ColumnWrapper>
  );
};

export default ClassChoicePage;
