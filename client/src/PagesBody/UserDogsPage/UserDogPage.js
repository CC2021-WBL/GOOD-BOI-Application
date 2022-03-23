import { useContext, useEffect, useState } from 'react';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ErrorComponent from '../ErrorPage/ErrorComponent';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import Spinner from '../../Atoms/Spinner/Spinner';
import { DOG_ACTIONS, USER_ACTIONS } from '../../Consts/reducersActions';
import { DogContext } from '../../Context/DogContext';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { generateErrorMessage } from '../../Tools/generateErrorMessage';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const UserDogPage = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const [isPending, setIsPending] = useState(true);
  const [participantDogs, setParticipantDogs] = useState(null);
  const { dogState, dogDispatch } = useContext(DogContext);
  const [fetchErrors, setFetchErrors] = useState(null);
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
            throw Error(generateErrorMessage(response.status));
          }
        } catch (error) {
          setFetchErrors(error.message);
        }
      }

      getDogsNames();
      setIsPending(false);
    }
  }, []);

  return (
    <>
      {fetchErrors ? (
        <ErrorComponent message={fetchErrors} />
      ) : (
        <>
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
            <FakeButton
              colors="secondary"
              text="DODAJ NOWEGO PSA"
              to="/add-dog-form"
              className="add-dogs"
            />
          </ColumnWrapper>
        </>
      )}
    </>
  );
};

export default UserDogPage;
