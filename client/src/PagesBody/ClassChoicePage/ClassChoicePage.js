import { useContext, useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { ContestContext } from '../../Context/ContestContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import contests from '../../Data/MongoDBMock/contests';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { useLocation } from 'react-router-dom';

const ClassChoicePage = () => {
  const { contestState } = useContext(ContestContext);
  const [selectedClass, setSelectedClass] = useState('');
  const [classesArr, setClassesArr] = useState(null);
  const location = useLocation();

  const { contestId } = contestState;

  useEffect(() => {
    async function getClasses() {
      const response = await fetch(
        `api/contests/classes/${contestId}`,
        requestOptionsGET,
      );
      if (response.status === 200) {
        const obedienceClassesObject = await response.json();
        let classes = [];
        if (obedienceClassesObject.length > 0) {
          obedienceClassesObject.forEach((element) => {
            classes.push(element.classNumber);
          });
        }
        setClassesArr(classes);
      } else {
        alert('Ooops, coś poszło nie tak');
      }
    }
    getClasses();
  }, []);

  const clickHandler = (index) => {
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
      {classesArr &&
        Object.keys(classesArr).map((obedienceClass, index) => {
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
      {classesArr && location.state && (
        <FakeButton
          text={'WYŚLIJ FORMULARZ'}
          colors="secondary"
          to={linkTo()}
        />
      )}
      {classesArr && !location.state && (
        <FakeButton text={'Pokaż wyniki'} colors="secondary" to={linkTo()} />
      )}
    </ColumnWrapper>
  );
};

export default ClassChoicePage;
