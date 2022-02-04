import propTypes from 'prop-types';

import ProfileCardStyled from './ProfileCardStyled';
import UserProfileData from '../../Atoms/UserProfileData/UserProfileData';

const ProfileCard = ({ userData }) => {
  return (
    <ProfileCardStyled>
      <div className="bg-box" />
      <UserProfileData userData={userData} />
    </ProfileCardStyled>
  );
};

ProfileCard.propTypes = {
  userData: propTypes.object,
};

export default ProfileCard;
