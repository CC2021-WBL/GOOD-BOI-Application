import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const ClassesPage = () => {
  const { contestId } = useParams();
  const [contestClasses, setContestClasses] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchClasses() {
      const response = await fetch(
        `/api/contests/classes/${contestId}`,
        requestOptionsGET,
      );
      if (response.status === 200) {
        const classes = await response.json();
        setContestClasses(classes);
      }
    }
    fetchClasses();
  }, []);

  function onClickFinish() {
    navigate('/contests');
  }

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25}>
      {contestClasses
        ? Object.keys(contestClasses).map((obedienceClass, index) => {
            return (
              <ClassOrDogButton
                key={index}
                contestId={contestId}
                classInfo={{
                  obedienceClass: contestClasses[obedienceClass].classNumber,
                  dogsAmount:
                    contestClasses[obedienceClass].participants.length,
                  isCompleted: contestClasses[obedienceClass].isFinished,
                }}
              />
            );
          })
        : ''}
      <MainButton onClick={onClickFinish} secondary text="ZAKOŃCZ ZAWODY" />
    </ColumnWrapper>
  );
};

export default ClassesPage;
