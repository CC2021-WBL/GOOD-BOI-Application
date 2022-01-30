import ProfileCardStyled from './ProfileCardStyled';
import UserNameAndImg from '../../Atoms/UserNameAndImg/UserNameAndImg';

const ProfileCard = () => {
  return (
    <ProfileCardStyled>
      <UserNameAndImg />
      <div className="container">
        <p>Street</p>
        <p>Zip-Code Town</p>
      </div>
    </ProfileCardStyled>
  );
};

export default ProfileCard;
