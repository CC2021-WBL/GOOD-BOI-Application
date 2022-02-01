import {
  useUpdateUserContext,
  useUserContext,
} from '../../Context/DataContext';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { Link } from 'react-router-dom';
import MainButton from '../../Atoms/MainButton/MainButton';

const RolePage = () => {
  const userData = useUserContext();
  console.log(userData);
  const updateContext = useUpdateUserContext();

  return (
    <ColumnWrapper paddingLeftRight={1}>
      <h1> Choose Your Role!</h1>
      <Link to="/contests" style={{ textDecoration: 'none' }}>
        <MainButton text="Obsługa" primary />
      </Link>
      <MainButton onClick={updateContext} primary text="Update"></MainButton>
    </ColumnWrapper>
  );
};

export default RolePage;
