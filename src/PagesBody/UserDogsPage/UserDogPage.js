import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import { UserDataContext } from '../../Context/UserDataContext';
import participants from '../../Data/MongoDBMock/participants';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDogPage = () => {
  const navigate = useNavigate();
  const { state } = useContext(UserDataContext);
  const [isPending, setIsPending] = useState(true);
  const [participantDogs, setParticipantDogs] = useState(null);

  useEffect(() => {
    setParticipantDogs(
      participants.find(
        (participant) => participant.participantId === state.userId,
      ).dogs,
    );
    setIsPending(false);
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
      <MainButton
        secondary
        text="DODAJ PSA"
        onClick={() => navigate('/add-dog-form')}
      />
    </ColumnWrapper>
  );
};

export default UserDogPage;
