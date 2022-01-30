import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ProfileCardStyled from '../../Molecules/ProfileCard/ProfileCardStyled';
import UserAddress from '../../Atoms/UserAdress/UserAddress';
import UserNameAndImg from '../../Atoms/UserNameAndImg/UserNameAndImg';

const UserDataPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <ProfileCardStyled>
        <UserNameAndImg />
        <UserAddress withEdit />
      </ProfileCardStyled>
    </ColumnWrapper>
  );
};

export default UserDataPage;
