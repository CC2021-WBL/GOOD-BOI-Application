import propTypes from 'prop-types';

import ProfileCardStyled from './ProfileCardStyled';
import UserProfileData from '../../Atoms/UserProfileData/UserProfileData';

const ProfileCard = ({ withEdit }) => {
  return (
    <ProfileCardStyled>
      <div className="bg-box"></div>
      <UserProfileData withEdit={withEdit} />
    </ProfileCardStyled>
  );
};

ProfileCard.propTypes = {
  userData: propTypes.object,
  withEdit: propTypes.bool,
};

export default ProfileCard;
