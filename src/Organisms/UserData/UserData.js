import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import ProfileCardStyled from '../../Molecules/ProfileCard/ProfileCardStyled';
import UserField from '../../Atoms/UserField/UserField';
const UserData = () => {
  return (
    <>
      <ColumnWrapper paddingLeftRight={1}>
        <ProfileCardStyled>
          {/* <UserNameAndImg /> */}
          {/* <UserAddress withEdit /> */}
          <ProfileCard withEdit />
        </ProfileCardStyled>
        <UserField text="zmień email" email />
        <UserField text="zmień hasło" password />
      </ColumnWrapper>
    </>
  );
};

export default UserData;
