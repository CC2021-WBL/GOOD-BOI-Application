import { useContext, useEffect, useState } from 'react';

import ParticipantData from '../../Organisms/ParticipantData/ParticipantData';
import Spinner from '../../Atoms/Spinner/Spinner';
import { UserDataContext } from '../../Context/UserDataContext';
import { useParams } from 'react-router-dom';

const ParticipantDataPage = () => {
  const { participantId: participantIdParams } = useParams();
  const [isPending, setIsPending] = useState(true);
  const [participantId, setParticipantId] = useState(null);
  const { state } = useContext(UserDataContext);

  useEffect(() => {
    if (state.userId) {
      setParticipantId(state.userId);
    } else if (participantIdParams) {
      setParticipantId(participantIdParams);
    }
    setIsPending(false);
  }, []);

  return (
    <>
      {isPending && <Spinner />}
      {participantId && <ParticipantData id={participantId} />}
    </>
  );
};

export default ParticipantDataPage;
