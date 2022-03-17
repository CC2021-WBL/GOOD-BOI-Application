import {
  CONTEST_ACTIONS,
  DOG_ACTIONS,
  USER_ACTIONS,
} from '../../Consts/reducersActions';
import { ROLES, ROLE_NAME } from '../../Consts/rolesConsts';
import { useContext, useEffect } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import ForbiddenEntryPage from '../ForbiddenEntryPage/ForbiddenEntryPage';
import MainButton from '../../Atoms/MainButton/MainButton';
import { UserDataContext } from '../../Context/UserDataContext';
import { createURLForRolePage } from '../../Tools/UrlCreators';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { useNavigate } from 'react-router-dom';

const RolePage = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const { dogDispatch } = useContext(DogContext);
  const { contestDispatch } = useContext(ContestContext);
  const { userId, roles, isAuthenticated } = state;
  const navigate = useNavigate();

  useEffect(() => {
    contestDispatch({ type: CONTEST_ACTIONS.CLEAR });
    dogDispatch({ type: DOG_ACTIONS.CLEAR_CHOSEN_DOG });
    dispatch({ type: USER_ACTIONS.CLEAR_SELECTED_ROLE });
  }, []);

  if (!isAuthenticated) {
    return <ForbiddenEntryPage />;
  }

  const handleStaffRoleClick = (event, role) => {
    event.preventDefault();
    if (role === ROLE_NAME.STAFF) {
      navigate(createURLForRolePage(role, userId), {
        state: { text: 'Lista zawodów', label: 'Wybierz zawody' },
      });
    } else if (role === ROLE_NAME.MANAGER) {
      navigate('/manager');
    } else {
      navigate(createURLForRolePage(role, userId));
    }
    dispatch({
      type: 'SELECT_ROLE',
      selectedRole: role,
    });
  };

  const handleLogoutClick = (event) => {
    event.preventDefault();

    fetch('/api/users/logout', requestOptionsGET)
      .then((response) => response.text())
      .then((result) => {
        dispatch({ type: 'LOG_OUT', index: 1 });
        navigate('/');
      })
      .catch((error) => alert(error));
  };

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={1.5}>
      {roles.map((role, index) =>
        role === 'staff' ? (
          <MainButton
            key={index}
            ternary
            text={ROLES[role].roleButtonText}
            onClick={(event) => {
              handleStaffRoleClick(event, role);
            }}
          />
        ) : (
          <MainButton
            key={index}
            ternary
            text={ROLES[role].roleButtonText}
            onClick={(event) => {
              handleStaffRoleClick(event, role);
            }}
          />
        ),
      )}
      <MainButton
        text="Wyloguj się"
        secondary
        onClick={(event) => {
          handleLogoutClick(event);
        }}
      />
    </ColumnWrapper>
  );
};

export default RolePage;
