import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import Spinner from '../../Atoms/Spinner/Spinner';
import { DOG_ACTIONS, USER_ACTIONS } from '../../Consts/reducersActions';
import { DogContext } from '../../Context/DogContext';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const UserDogPage = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const [isPending, setIsPending] = useState(true);
  const [participantDogs, setParticipantDogs] = useState(null);
  const navigate = useNavigate();
  const { dogState, dogDispatch } = useContext(DogContext);
  const { dogs } = dogState;

  useEffect(() => {
    if (state.selectedRole !== ROLE_NAME.PARTICIPANT)
      dispatch({
        type: USER_ACTIONS.SELECT_ROLE,
        selectedRole: ROLE_NAME.PARTICIPANT,
      });
  }, []);

  useEffect(() => {
    if (dogs && dogs.length > 0) {
      setParticipantDogs(dogs);
      setIsPending(false);
    } else {
      async function getDogsNames() {
        try {
          let response = await fetch(
            `/api/users/dogs/${state.userId}`,
            requestOptionsGET,
          );
          if (response.ok) {
            response = await response.json();
            setParticipantDogs(response.dogs);

            dogDispatch({
              type: DOG_ACTIONS.SET_DATA,
              payload: { dogs: response.dogs, chosenDog: {} },
            });
          } else {
            alert('Ooops! nie udało się pobrać danych z serwera');
          }
        } catch (error) {
          console.log(error);
        }
      }

      getDogsNames();
      setIsPending(false);
    }
  }, []);

  const onAddDogClick = (event) => {
    event.preventDefault();
    dogDispatch({
      type: DOG_ACTIONS.UPDATE_ONE_FIELD,
      fieldName: 'chosenDog',
      payload: {},
    });
    navigate('/add-dog-form');
  };

  return (
    <ColumnWrapper
      paddingLeftRight={1}
      paddingTop={0.5}
      className="user-dogs-column-wrapper"
    >
      {isPending && <Spinner />}
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
      {dogs && dogs.length === 0 && (
        <h3 className="dogs-0">Nie dodałeś jeszcze żadnego psa.</h3>
      )}
      <MainButton
        secondary
        text="DODAJ NOWEGO PSA"
        onClick={onAddDogClick}
        className="add-dogs"
      />
    </ColumnWrapper>
  );
};

export default UserDogPage;
