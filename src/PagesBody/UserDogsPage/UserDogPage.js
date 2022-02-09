import { useContext, useEffect, useState } from 'react';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { DogContext } from '../../Context/DogContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import { UserDataContext } from '../../Context/UserDataContext';
import participants from '../../Data/MongoDBMock/participants';

const UserDogPage = () => {
  const [isPending, setIsPending] = useState(true);
  const [participantDogs, setParticipantDogs] = useState(null);
  const { dogDispatch } = useContext(DogContext);

  useEffect(() => {
    const dogs = participants.find(
      (participant) => participant.participantId === state.userId,
    ).dogs;
    setParticipantDogs(dogs);
    setIsPending(false);
    dogDispatch({ type: 'SET_DATA', payload: { dogs: dogs, chosenDog: '' } });
  }, []);

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
      {isPending && <p>Loading...</p>}
      {participantDogs &&
        participantDogs.map((dog, index) => {
          const { dogName, dogId } = dog;
          return (
            <ClassOrDogButton
              key={dogId}
              dogInfo={{
                index,
                dogName,
                dogId,
              }}
              noInfoLabel
            />
          );
        })}

      <FakeButton secondary text="DODAJ NOWEGO PSA" to="/add-dog-form" />
    </ColumnWrapper>
  );
};

export default UserDogPage;
