import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import { ContestContext } from '../../Context/ContestContext';
import { UserDataContext } from '../../Context/UserDataContext';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const ClassChoicePage = () => {
  const { contestState } = useContext(ContestContext);
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  console.log(isAuthenticated);

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
    <ColumnWrapper
      paddingLeftRight={1}
      paddingTop={0.25}
      contentPosition={isAuthenticated}
      maxWidthBigScreen={35}
      className="class-choice-wrapper"
    >
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
