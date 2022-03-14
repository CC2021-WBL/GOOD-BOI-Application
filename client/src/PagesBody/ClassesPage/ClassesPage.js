import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import { requestOptionsGET } from '../../FetchData/requestOptions';

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
      const result = await response.json();
      setContestClasses(result);
      console.log(result);
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
                  obedienceClass,
                  dogsAmount:
                    contestClasses[obedienceClass].participants.length,
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
