import propTypes from 'prop-types';

import ProfileCardStyled from './ProfileCardStyled';
import UserProfileData from '../../Atoms/UserProfileData/UserProfileData';

const ProfileCard = ({
  withEdit,
  initialState,
  className,
  isBigScreen,
  userData,
  fetchErrors,
}) => {
  return (
    <>
      {withEdit ? (
        <ProfileCardStyled className={className}>
          <UserProfileData
            withEdit={withEdit}
            initialState={initialState}
            className={className}
            isBigScreen={isBigScreen}
            userData={userData}
            fetchErrors={fetchErrors}
          />
        </ProfileCardStyled>
      ) : (
        <ProfileCardStyled className={className}>
          <div className="bg-box"></div>
          <UserProfileData userData={userData} />
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
