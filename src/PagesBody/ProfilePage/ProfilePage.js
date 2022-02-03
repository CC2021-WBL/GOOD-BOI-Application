import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';

const ProfilePage = ({ userId }) => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <ProfileCard />
      <Link to="/user-dogs">
        <MainButton text="Twoje Psy" ternary />
      </Link>
      <Link to={`./${userId}/contests`}>
        <MainButton text="Twoje Konkursy" ternary />
      </Link>
      <Link to="/user-data">
        <MainButton text="Twoje Dane" ternary />
      </Link>
      <Link to="/upcoming">
        <MainButton text="Nadchodzące Konkursy" secondary />
      </Link>
    </ColumnWrapper>
  );
};

ProfilePage.propTypes = {
  userId: propTypes.string,
};

export default ProfilePage;
