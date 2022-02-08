import ProfileCardStyled from './ProfileCardStyled';
import UserAddress from '../../Atoms/UserAdress/UserAddress';
import UserNameAndImg from '../../Atoms/UserNameAndImg/UserNameAndImg';

const ProfileCard = () => {
  return (
    <ProfileCardStyled>
      <UserNameAndImg />
      <UserAddress />
    </ProfileCardStyled>
  );
};

export default ProfileCard;
