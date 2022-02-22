import {
  CONTEST_ACTIONS,
  DOG_ACTIONS,
  USER_ACTIONS,
} from '../../Consts/reducersActions';
import { useContext, useEffect } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import ForbiddenEntryPage from '../ForbiddenEntryPage/ForbiddenEntryPage';
import MainButton from '../../Atoms/MainButton/MainButton';
import { ROLES } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { createURLForRolePage } from '../../Tools/UrlCreators';
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
    if (role === 'staff') {
      navigate(createURLForRolePage(role, userId), {
        state: { text: 'Lista zawodów', label: 'Wybierz zawody' },
      });
    } else {
      navigate(createURLForRolePage(role, userId));
    }
    dispatch({
      type: 'SELECT_ROLE',
      selectedRole: role,
    });
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
        onClick={() => {
          dispatch({ type: 'LOG_OUT', index: 1 });
          navigate('/');
        }}
      />
    </ColumnWrapper>
  );
};

export default RolePage;
