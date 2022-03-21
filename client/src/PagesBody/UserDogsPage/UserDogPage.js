import { DOG_ACTIONS, USER_ACTIONS } from '../../Consts/reducersActions';
import { useContext, useEffect, useState } from 'react';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { DogContext } from '../../Context/DogContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import Spinner from '../../Atoms/Spinner/Spinner';
import { UserDataContext } from '../../Context/UserDataContext';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { ContestContext } from '../../Context/ContestContext';
import DataLine from '../../Atoms/DataLine/DataLine';

const UserDogPage = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const [contestData, setContestData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [participantDogs, setParticipantDogs] = useState(null);
  const { dogState, dogDispatch } = useContext(DogContext);
  const { dogs } = dogState;
  const { contestState } = useContext(ContestContext);

  useEffect(() => {
    async function fetchContestData() {
      const response = await fetch(
        `/api/contests/${contestState.contestId}`,
        requestOptionsGET,
      );
      if (response.ok) {
        const result = await response.json();
        setContestData(result);
        setIsPending(false);
      } else {
      }
    }
    fetchContestData();
  }, []);

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

        <FakeButton
          colors="secondary"
          text="DODAJ NOWEGO PSA"
          to="/add-dog-form"
          className="add-dogs"
        />
      </ColumnWrapper>
      {contestState.contestId && contestData && (
        <ColumnWrapper
          paddingLeftRight={1}
          paddingTop={0.5}
          className="enter-competition-container"
        >
          <DataLine text={contestState.contestName} />
          <DataLine text={contestData.startDate} />
          <DataLine
            text={[contestData.address.street, contestData.address.city]}
          />
          {/*<DataLine text={contestData.address.numberOfHouse} />*/}
          <DataLine text={`Wybierz psa`} />
          <DataLine text={`Potwierdż dane psa`} />
          <DataLine text={`Potwierdź dane użytkownika`} />
          <DataLine text={`Wybierz klasę`} />
          <DataLine text={`Potwierdź udział`} />
        </ColumnWrapper>
      )}
    </ColumnWrapper>
  );
};

export default UserDogPage;
