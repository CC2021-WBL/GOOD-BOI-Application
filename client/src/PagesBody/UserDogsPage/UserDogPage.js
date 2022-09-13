import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import { USER_ACTIONS } from '../../Consts/reducersActions';
import { DogContext } from '../../Context/DogContext';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { ContestContext } from '../../Context/ContestContext';
import DataLine from '../../Atoms/DataLine/DataLine';
import EnterCompetitionContainer from '../../Organisms/EnterCompetitionContainer/EnterCompetitionContainer';
import enterCompetitionAddClass from '../../Organisms/EnterCompetitionContainer/enterCompetitionAddClass';

const UserDogPage = () => {
  const { state, dispatch } = useContext(UserDataContext);

  const navigate = useNavigate();
  const { dogs, setChosenDog } = useContext(DogContext);
  const { contestState } = useContext(ContestContext);

  useEffect(() => {
    if (state.selectedRole !== ROLE_NAME.PARTICIPANT)
      dispatch({
        type: USER_ACTIONS.SELECT_ROLE,
        selectedRole: ROLE_NAME.PARTICIPANT,
      });
  }, []);

  const enterCompetitionUserDogs = () => {
    return contestState.contestId !== null ? '-enter-competition' : '';
  };

  const onAddDogClick = (event) => {
    event.preventDefault();
    setChosenDog(() => {
      return {};
    });
    navigate('/add-dog-form');
  };

  return (
    <>
      <ColumnWrapper className={`user-dogs${enterCompetitionUserDogs()}`}>
        <ColumnWrapper
          paddingLeftRight={1}
          paddingTop={0.5}
          className={`user-dogs-column-wrapper${enterCompetitionUserDogs()}`}
        >
          {dogs &&
            dogs.map((dog, index) => {
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
        {contestState.contestId !== null && <EnterCompetitionContainer />}
      </ColumnWrapper>
    </>
  );
};

export default UserDogPage;
