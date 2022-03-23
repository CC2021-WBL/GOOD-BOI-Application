import { useContext, useEffect, useState } from 'react';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import Spinner from '../../Atoms/Spinner/Spinner';
import { DOG_ACTIONS, USER_ACTIONS } from '../../Consts/reducersActions';
import { DogContext } from '../../Context/DogContext';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { ContestContext } from '../../Context/ContestContext';
import DataLine from '../../Atoms/DataLine/DataLine';

const UserDogPage = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const [isPending, setIsPending] = useState(true);
  const [participantDogs, setParticipantDogs] = useState(null);
  const { dogState, dogDispatch } = useContext(DogContext);
  const { dogs } = dogState;
  const { contestState } = useContext(ContestContext);
  console.log(contestState);

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

  const enterCompetitionClass = () => {
    if (contestState.contestId === null) {
      return '';
    } else {
      return '-enter-competition';
    }
  };

  return (
    <ColumnWrapper className={`user-dogs${enterCompetitionClass()}`}>
      <ColumnWrapper
        paddingLeftRight={1}
        paddingTop={0.5}
        className={`user-dogs-column-wrapper${enterCompetitionClass()}`}
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
        <FakeButton
          colors="secondary"
          text="DODAJ NOWEGO PSA"
          to="/add-dog-form"
          className="add-dogs"
        />
      </ColumnWrapper>
      {contestState.contestId && (
        <ColumnWrapper className="enter-competition-container">
          <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
            <DataLine text={contestState.contestName} />
            <DataLine
              text={[
                `
              ${contestState.contestAddress.street} ${
                  contestState.contestAddress.numberOfHouse || ''
                }, ${contestState.contestAddress.city.toUpperCase()}`,
                contestState.contestStartDate,
              ]}
            />
            <DataLine text={`Wybierz psa`} />
            <DataLine text={`Potwierdż dane psa`} />
            <DataLine text={`Potwierdź dane użytkownika`} />
            <DataLine text={`Wybierz klasę`} />
            <DataLine text={`Potwierdź udział`} />
          </ColumnWrapper>
        </ColumnWrapper>
      )}
    </ColumnWrapper>
  );
};

export default UserDogPage;
