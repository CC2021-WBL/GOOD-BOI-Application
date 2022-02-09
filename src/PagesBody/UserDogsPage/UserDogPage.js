import {
  CONTEST_ACTIONS,
  DOG_ACTIONS,
  USER_ACTIONS,
} from '../../Consts/reducersActions';
import { useContext, useEffect, useState } from 'react';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import MainButton from '../../Atoms/MainButton/MainButton';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import participants from '../../Data/MongoDBMock/participants';
import { useNavigate } from 'react-router-dom';

const UserDogPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserDataContext);
  const [isPending, setIsPending] = useState(true);
  const [participantDogs, setParticipantDogs] = useState(null);
  const { dogDispatch } = useContext(DogContext);
  const { contestState, contestDispatch } = useContext(ContestContext);

  useEffect(() => {
    const dogs = participants.find(
      (participant) => participant.participantId === state.userId,
    ).dogs;
    setParticipantDogs(dogs);
    setIsPending(false);
    dogDispatch({
      type: DOG_ACTIONS.SET_DATA,
      payload: { dogs: dogs, chosenDog: '' },
    });
    if (state.selectedRole !== ROLE_NAME.PARTICIPANT)
      dispatch({
        type: USER_ACTIONS.SELECT_ROLE,
        selectedRole: ROLE_NAME.PARTICIPANT,
      });
    if (contestState.contestId || contestState.contestName) {
      contestDispatch({ type: CONTEST_ACTIONS.CLEAR });
    }
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
