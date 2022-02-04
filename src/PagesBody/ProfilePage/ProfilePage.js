import propTypes from 'prop-types';
import { useContext } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import { UserDataContext } from '../../Context/UserDataContext';

const ProfilePage = () => {
  const userData = useContext(UserDataContext);
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <ProfileCard userData={userData.state} />
      <FakeButton to="/user-dogs" text="Twoje Psy" ternary="ternary" />
      <FakeButton
        to={`./${userData.state.userId}/contests`}
        text="Twoje Konkursy"
        ternary="ternary"
      />
      <FakeButton to="/user-data" text="Twoje Dane" ternary="ternary" />
      <FakeButton
        to="/upcoming"
        text="Nadchodzące Konkursy"
        secondary="secondary"
      />
    </ColumnWrapper>
  );
};

ProfilePage.propTypes = {
  userId: propTypes.string,
};

export default ProfilePage;
