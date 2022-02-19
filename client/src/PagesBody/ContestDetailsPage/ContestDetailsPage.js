import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ContestContext } from '../../Context/ContestContext';
import ContestDetails from '../../Organisms/ContestDetails/ContestDetails';

const ContestDetailsPage = () => {
  const { contestId: contestIdParams } = useParams();
  const [isPending, setIsPending] = useState(true);
  const [contestId, setContestId] = useState(null);
  const { contestState } = useContext(ContestContext);

  useEffect(() => {
    if (contestState.contestId) {
      setContestId(contestState.contestId);
    } else if (contestIdParams) {
      setContestId(contestIdParams);
    }
    setIsPending(false);
  }, []);

  return (
    <>
      {isPending && <p>Loading...</p>}
      {contestId && <ContestDetails contestId={contestId} />}
    </>
  );
};

export default ContestDetailsPage;
