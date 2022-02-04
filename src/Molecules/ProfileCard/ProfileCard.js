import propTypes from 'prop-types';

import ProfileCardStyled from './ProfileCardStyled';
import UserProfileData from '../../Atoms/UserProfileData/UserProfileData';

const ProfileCard = ({ userId }) => {
  return (
    <ProfileCardStyled>
      <div className="bg-box" />
      <UserProfileData userId={userId} />
    </ProfileCardStyled>
  );
};

ProfileCard.propTypes = {
  userId: propTypes.string,
};

export default ProfileCard;
