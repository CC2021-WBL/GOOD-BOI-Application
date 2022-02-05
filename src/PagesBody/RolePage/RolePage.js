import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ForbiddenEntryPage from '../ForbiddenEntryPage/ForbiddenEntryPage';
import MainButton from '../../Atoms/MainButton/MainButton';
import { ROLES } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { getLinkUrl } from '../../Tools/getLinkUrl';

const RolePage = () => {
  const { state, dispatch } = useContext(UserDataContext);
  console.log(state);
  const { userId, roles, isAuthenticated } = state;
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <ForbiddenEntryPage />;
  }

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={1.5}>
      {roles.map((role, index) => (
        <Link
          key={index}
          to={getLinkUrl(userId, role)}
          style={{ textDecoration: 'none' }}
        >
          <MainButton text={ROLES[role].roleButtonText} ternary />
        </Link>
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
