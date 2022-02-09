import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import UserField from '../../Atoms/UserField/UserField';
const UserData = () => {
  return (
    <>
      <ColumnWrapper paddingLeftRight={1}>
        <ProfileCard withEdit />
        <UserField text="zmień email" email />
        <UserField text="zmień hasło" password />
      </ColumnWrapper>
    </>
  );
};

export default UserData;
