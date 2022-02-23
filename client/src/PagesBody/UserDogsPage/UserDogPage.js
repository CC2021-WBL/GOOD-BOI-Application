import { DOG_ACTIONS, USER_ACTIONS } from '../../Consts/reducersActions';
import { useContext, useEffect, useState } from 'react';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { DogContext } from '../../Context/DogContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import participants from '../../Data/MongoDBMock/participants';

const UserDogPage = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const [isPending, setIsPending] = useState(true);
  const [participantDogs, setParticipantDogs] = useState(null);
  const { dogDispatch } = useContext(DogContext);
  const [dogs, setDogs] = useState([])
  useEffect(() => {
    const getDogs = async () => {
      const res = await fetch('/api/dogs')
      console.log(res)
      const doggos = await res.json()
      setParticipantDogs(doggos)
    }
    getDogs()
    // const dogs = participants.find(
    //   (participant) => participant.participantId === state.userId,
    // ).dogs;
    // setParticipantDogs(dogs);
    // setIsPending(false);
    // dogDispatch({
    //   type: DOG_ACTIONS.SET_DATA,
    //   payload: { dogs: dogs, chosenDog: '' },
    // });
    // if (state.selectedRole !== ROLE_NAME.PARTICIPANT)
    //   dispatch({
    //     type: USER_ACTIONS.SELECT_ROLE,
    //     selectedRole: ROLE_NAME.PARTICIPANT,
    //   });
  }, []);
  useEffect(()=>{
    console.log(dogs)
  },[dogs])

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

      <FakeButton
        colors="secondary"
        text="DODAJ NOWEGO PSA"
        to="/add-dog-form"
      />
    </ColumnWrapper>
  );
};

export default UserDogPage;
