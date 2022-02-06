import DogData from '../../Organisms/DogData/DogData';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ParticipantContext } from '../../Context/ParticipantContext';

// @TODO delete this in future
const fakeDogId = 'VIII-40407';

const DogDataPage = () => {
  const [isPending, setIsPending] = useState(true);

  // From the previous page 'dog-submit' after choosing dog we passed to this dog-data page
  // dogId by state passed by navigate
  //      navigate(`./dog-data`, {
  //         state: { dogId: '' },
  //       });

  const location = useLocation();
  const [dogId, setDogId] = useState(null);
  const { dogId: dogIdParams } = useParams();
  const { participantData } = useContext(ParticipantContext);
  console.log(participantData);

  /*
  These works three-way:
    1) It checks if somebody pass dogId by navigate from previous page
    2) It checks if somebody pass dogId by url address (useParams())
    3) It checks participantContext if participant have only 1 dog (so pass this dogId)
    4) I pass fake dogId.
   */

  useEffect(() => {
    if (location.state) {
      setDogId(location.state.dogId);
    } else if (dogIdParams) {
      setDogId(dogIdParams);
    } else if (participantData.dogs.length === 1) {
      setDogId(participantData.dogs[0].dogId);
    } else {
      setDogId(fakeDogId);
    }
    setIsPending(false);
  }, []);

  return (
    <>
      {isPending && <p>Loading...</p>}
      {dogId && <DogData id={dogId} />}
    </>
  );
};

export default DogDataPage;
