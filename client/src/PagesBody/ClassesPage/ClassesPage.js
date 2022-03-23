import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import Spinner from '../../Atoms/Spinner/Spinner';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const ClassesPage = () => {
  const { contestId } = useParams();
  const [contestClasses, setContestClasses] = useState(null);
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    async function fetchClasses() {
      const response = await fetch(
        `/api/contests/classes/${contestId}`,
        requestOptionsGET,
      );
      const result = await response.json();
      setContestClasses(result);
      console.log(result);
      setIsPending(false);
    }
    fetchClasses();
  }, []);

  function onClickFinish() {
    navigate('/contests');
  }
  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25} maxWidthBigScreen={45}>
      {isPending && <Spinner />}
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
      {!isPending && (
        <MainButton onClick={onClickFinish} secondary text="ZAKOŃCZ ZAWODY" />
      )}
    </ColumnWrapper>
  );
};

export default ClassesPage;
