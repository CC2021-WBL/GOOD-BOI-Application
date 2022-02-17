import propTypes from 'prop-types';

import ProfileCardStyled from './ProfileCardStyled';
import UserProfileData from '../../Atoms/UserProfileData/UserProfileData';

// eslint-disable-next-line react/prop-types
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
};

export default ProfileCard;
