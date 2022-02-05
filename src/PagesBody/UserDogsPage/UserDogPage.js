import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import { UserDataContext } from '../../Context/UserDataContext';
import participants from '../../Data/MongoDBMock/participants';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDogPage = () => {
  const navigate = useNavigate();

  const { state } = useContext(UserDataContext);
  console.log(state);
  console.log(state.userId);
  const participantDogs = participants.find(
    (participant) => participant.participantId === state.userId,
  ).dogs;
  console.log(participantDogs);

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
      {participantDogs.map((dog, index) => {
        //comment just to make commit possible
        const { dogName, dogId } = dog;
        return (
          <ClassOrDogButton
            key={dogId}
            dogInfo={{
              index,
              dogName,
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
