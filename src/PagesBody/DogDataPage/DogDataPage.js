import DogData from '../../Organisms/DogData/DogData';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DogContext } from '../../Context/DogContext';

const DogDataPage = () => {
  const { dogId: dogIdParams } = useParams();
  const [isPending, setIsPending] = useState(true);
  const [dogId, setDogId] = useState(null);
  const { dogState } = useContext(DogContext);

  useEffect(() => {
    if (dogState.chosenDog.dogId) {
      setDogId(dogState.chosenDog.dogId);
    } else if (dogIdParams) {
      setDogId(dogIdParams);
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
