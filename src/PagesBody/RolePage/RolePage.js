import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { DogContext } from '../../Context/DogContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import ForbiddenEntryPage from '../ForbiddenEntryPage/ForbiddenEntryPage';
import MainButton from '../../Atoms/MainButton/MainButton';
import { ROLES } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { createURLForRolePage } from '../../Tools/UrlCreators';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const RolePage = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const { dogState, dogDispatch } = useContext(DogContext);
  const { userId, roles, isAuthenticated } = state;
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <ForbiddenEntryPage />;
  }

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={1.5}>
      {roles.map((role, index) => (
        <FakeButton
          key={index}
          ternary
          text={ROLES[role].roleButtonText}
          to={createURLForRolePage(role, userId)}
        />
      ))}
      <MainButton
        text="Test - aktualizacja danych"
        secondary
        onClick={() => {
          dispatch({
            type: 'UPDATE_FIELD',
            fieldName: 'userName',
            payload: 'Zenek',
          });
          console.log(state);
          dogDispatch({
            type: 'SET_MOCK',
          });
          console.log(dogState);
        }}
      />
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
