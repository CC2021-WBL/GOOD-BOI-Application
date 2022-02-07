import DogData from '../../Organisms/DogData/DogData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DogDataPage = () => {
  const { dogId: dogIdParams } = useParams();
  const [isPending, setIsPending] = useState(true);
  const [dogId, setDogId] = useState(null);

  useEffect(() => {
    dogIdParams && setDogId(dogIdParams);
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
