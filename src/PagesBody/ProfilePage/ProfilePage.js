import propTypes from 'prop-types';
import { useContext } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import { UserDataContext } from '../../Context/UserDataContext';

const ProfilePage = () => {
  const { state } = useContext(UserDataContext);
  const { userId } = state;
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <ProfileCard />
      <FakeButton to="/user-dogs" text="Twoje Psy" ternary="ternary" />
      <FakeButton to="./contests" text="Twoje Konkursy" ternary="ternary" />
      <FakeButton
        to={`/user/${userId}/user-data`}
        text="Twoje Dane"
        ternary="ternary"
      />
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
