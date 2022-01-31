import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { Link } from 'react-router-dom';
import MainButton from '../../Atoms/MainButton/MainButton';
import { UserDataContext } from '../../Context/DataContext';
import { useContext } from 'react';

const RolePage = () => {
  const userData = useContext(UserDataContext);
  console.log(userData);

  return (
    <ColumnWrapper paddingLeftRight={1}>
      <h1> Choose Your Role!</h1>
      <Link to="/contests" style={{ textDecoration: 'none' }}>
        <MainButton text="Obsługa" primary />
      </Link>
    </ColumnWrapper>
  );
};

export default RolePage;
