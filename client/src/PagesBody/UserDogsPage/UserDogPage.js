import { DOG_ACTIONS, USER_ACTIONS } from '../../Consts/reducersActions';
import { useContext, useEffect, useState } from 'react';

import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { DogContext } from '../../Context/DogContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import participants from '../../Data/MongoDBMock/participants';
import GridWrapper from '../../Styles/GridWrapper';
import BurgerMenu from '../../Organisms/BurgerMenu/BurgerMenu';
import MenuStyled from '../../Organisms/BurgerMenu/MenuStyled';
import { Link } from 'react-router-dom';

const UserDogPage = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const [isPending, setIsPending] = useState(true);
  const [participantDogs, setParticipantDogs] = useState(null);
  const { dogDispatch } = useContext(DogContext);

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
  }, []);

  return (
    // TODO: add color props to choose for whole row
    <GridWrapper>
    {/* <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}> */}
    {/* TODO: create wrapper with responsive columns */}
    {/* <MenuStyled open={true} style={{gridColumn: 2}}/> */}
    {/* TODO: get menu styled from nav components */}
{/* TODO: display only on tablet + */}
<div style={{display:'flex', flexDirection:'column', gridColumn: 2}}>
<Link to="/">Home </Link>
<Link to="/">Home </Link>

<Link to="/">Home </Link>

<Link to="/">Home </Link>

</div>

    <div style={{gridColumn: 3}}>
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
    {/* </ColumnWrapper> */}
    </div>
    </GridWrapper>
  );
};

export default UserDogPage;
