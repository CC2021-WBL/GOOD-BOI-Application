import { Link } from 'react-router-dom';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';

import MainButton from '../../Atoms/MainButton/MainButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const RolePage = () => {
  return (
    <CardWrapper>
      <ColumnWrapper>
        <h1> Choose Your Role!</h1>
        <Link to="/contests" style={{ textDecoration: 'none' }}>
          <MainButton text="Obsługa" primary />
        </Link>
      </ColumnWrapper>
    </CardWrapper>
  );
};

export default RolePage;
