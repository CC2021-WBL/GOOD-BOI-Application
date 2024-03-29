import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ForbiddenEntryPage from '../ForbiddenEntryPage/ForbiddenEntryPage';
import MainButton from '../../Atoms/MainButton/MainButton';
import { CONTEST_ACTIONS, USER_ACTIONS } from '../../Consts/reducersActions';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import { ROLES, ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { createURLForRolePage } from '../../Tools/UrlCreators';

const RolePage = () => {
  const { state, dispatch, logout } = useContext(UserDataContext);
  const { setChosenDog } = useContext(DogContext);
  const { contestDispatch } = useContext(ContestContext);
  const { userId, roles, isAuthenticated } = state;
  const navigate = useNavigate();

  useEffect(() => {
    contestDispatch({ type: CONTEST_ACTIONS.CLEAR });
    setChosenDog((prevState) => {
      return {};
    });
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
    logout();
    navigate('/');
  };

  return (
    <ColumnWrapper
      paddingLeftRight={1}
      paddingTop={1.5}
      className="role-page-column-wrapper"
      maxWidthBigScreen={45}
    >
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
