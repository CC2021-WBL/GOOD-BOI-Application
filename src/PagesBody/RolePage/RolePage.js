import { Link } from 'react-router-dom';
import MainButton from '../../Atoms/MainButton/MainButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const RolePage = () => {
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
