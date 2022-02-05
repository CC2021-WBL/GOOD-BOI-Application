import propTypes from 'prop-types';

import ProfileCardStyled from './ProfileCardStyled';
import UserProfileData from '../../Atoms/UserProfileData/UserProfileData';

const ProfileCard = () => {
  return (
    <ProfileCardStyled>
      <div className="bg-box"></div>
      <UserProfileData />
    </ProfileCardStyled>
  );
};

ProfileCard.propTypes = {
  userData: propTypes.object,
};

export default ProfileCard;
