import propTypes from 'prop-types';

import ProfileCardStyled from './ProfileCardStyled';
import UserProfileData from '../../Atoms/UserProfileData/UserProfileData';

const ProfileCard = ({ withEdit, initialState }) => {
  return (
    <>
      {withEdit ? (
        <UserProfileData withEdit={withEdit} initialState={initialState} />
      ) : (
        <ProfileCardStyled>
          <div className="bg-box"></div>
          <UserProfileData />
        </ProfileCardStyled>
      )}
    </>
  );
};

ProfileCard.propTypes = {
  userData: propTypes.object,
  withEdit: propTypes.bool,
  initialState: propTypes.object,
};

export default ProfileCard;
