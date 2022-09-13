import {
  CONTEST_ACTIONS,
  DOG_ACTIONS,
  USER_ACTIONS,
} from '../../Consts/reducersActions';
import { useContext, useEffect } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import propTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import useUserData from '../../Hooks/QueryHooks/useUserData';
import Spinner from '../../Atoms/Spinner/Spinner';

const ProfilePage = () => {
  const paramsUserData = useParams();
  const { contestState, contestDispatch } = useContext(ContestContext);
  const { dogState, dogDispatch } = useContext(DogContext);
  const { state, dispatch } = useContext(UserDataContext);
  const { userId } = state;

  let currentUserId = userId;
  if (!currentUserId) {
    currentUserId = paramsUserData.userId;
  }

  const { data, isLoading } = useUserData(currentUserId, true);

  useEffect(() => {
    if (contestState.contestId || contestState.contestName) {
      contestDispatch({ type: CONTEST_ACTIONS.CLEAR });
    }
    if (dogState.chosenDog) {
      dogDispatch({ type: DOG_ACTIONS.CLEAR_CHOSEN_DOG });
    }
    if (state.selectedRole !== ROLE_NAME.PARTICIPANT) {
      dispatch({
        type: USER_ACTIONS.SELECT_ROLE,
        selectedRole: ROLE_NAME.PARTICIPANT,
      });
    }
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ColumnWrapper paddingLeftRight={1} className="user-profile">
      <ProfileCard userData={data} className="user-profile" />
      <FakeButton
        to={'/contests'}
        state={{
          contestContent: 'future',
        }}
        text="Zapisz się na Zawody"
        paragraphText="Przejdź do formularza zapisu na zawody."
        colors="secondary"
        className={['user-profile', 'user-upcoming']}
      />
      <FakeButton
        to="/user-dogs"
        text="Twoje Psy"
        paragraphText="Lista Psów przypisanych do Twojego konta. Zarejestruj je w systemie, żeby szybciej zgłaszać się na zawody."
        colors="ternary"
        className={['user-profile', 'user-dogs']}
      />
      <FakeButton
        to={`/contests`}
        state={{
          contestContent: 'custom',
        }}
        text="Twoje Zawody"
        paragraphText="Konkursy w których brałeś udział lub zapisz się na nadchodzące zawody, korzystając z wygodnego formularza."
        colors="ternary"
        className={['user-profile', 'user-contests']}
      />
      <FakeButton
        to={`/user/${userId}/user-data`}
        text="Twoje Dane"
        paragraphText="Tu możesz edytować swoje dane imienne i adresowe, a także email i hasło."
        colors="ternary"
        className={['user-profile', 'user-data']}
      />
    </ColumnWrapper>
  );
};

ProfilePage.propTypes = {
  userId: propTypes.string,
};

export default ProfilePage;
