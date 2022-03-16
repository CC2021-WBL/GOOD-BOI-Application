import { DOG_ACTIONS, USER_ACTIONS } from '../../Consts/reducersActions';
import { useContext, useEffect, useState } from 'react';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { DogContext } from '../../Context/DogContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const UserDogPage = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const [isPending, setIsPending] = useState(true);
  const [participantDogs, setParticipantDogs] = useState(null);
  const { dogDispatch } = useContext(DogContext);

  useEffect(() => {
    async function getDogsNames() {
      try {
        let response = await fetch(
          `/api/users/dogs/${state.userId}`,
          requestOptionsGET,
        );
        if (response.ok) {
          response = await response.json();
          setParticipantDogs(response.dogs);
          setIsPending(false);
          dogDispatch({
            type: DOG_ACTIONS.SET_DATA,
            payload: { dogs: response.dogs, chosenDog: {} },
          });
          if (state.selectedRole !== ROLE_NAME.PARTICIPANT)
            dispatch({
              type: USER_ACTIONS.SELECT_ROLE,
              selectedRole: ROLE_NAME.PARTICIPANT,
            });
        } else {
          alert('Ooops! nie udało się pobrać danych z serwera');
        }
      } catch (error) {
        console.log(error);
      }
    }

    getDogsNames();
  }, []);

  return (
    <ColumnWrapper
      paddingLeftRight={1}
      paddingTop={0.5}
      className="user-dogs-column-wrapper"
    >
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
              className="user-dogs-button"
            />
          );
        })}

      <FakeButton
        colors="secondary"
        text="DODAJ NOWEGO PSA"
        to="/add-dog-form"
        className="add-dogs"
      />
    </ColumnWrapper>
  );
};

export default UserDogPage;
