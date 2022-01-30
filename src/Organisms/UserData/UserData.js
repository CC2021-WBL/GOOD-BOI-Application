import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ProfileCardStyled from '../../Molecules/ProfileCard/ProfileCardStyled';
import UserAddress from '../../Atoms/UserAdress/UserAddress';
import UserField from '../../Atoms/UserField/UserField';
import UserNameAndImg from '../../Atoms/UserNameAndImg/UserNameAndImg';

const UserData = () => {
  return (
    <>
      <ColumnWrapper paddingLeftRight={1}>
        <ProfileCardStyled>
          <UserNameAndImg />
          <UserAddress withEdit />
        </ProfileCardStyled>
        <UserField text="zmień email" email />
        <UserField text="zmień hasło" password />
      </ColumnWrapper>
    </>
  );
};

export default UserData;
