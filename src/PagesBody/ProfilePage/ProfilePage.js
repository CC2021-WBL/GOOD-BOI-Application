/* eslint-disable no-unused-vars */

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import { Link } from 'react-router-dom';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import propTypes from 'prop-types';

const ProfilePage = ({ userId }) => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <ProfileCard />
      <FakeButton to="/user-dogs" text="Twoje Psy" ternary="ternary" />
      <FakeButton
        to={`/contests`}
        state={{ contestContent: 'results' }}
        text="Twoje Konkursy"
        ternary="ternary"
      />
      <FakeButton to="/user-data" text="Twoje Dane" ternary="ternary" />
      <FakeButton
        to="contests"
        state={{ contestContent: 'future' }}
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
