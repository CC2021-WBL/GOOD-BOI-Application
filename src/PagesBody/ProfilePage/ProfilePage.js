import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const ProfilePage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <div>
        <h2>Alicja Kondrat</h2>
      </div>
      <div>
        <p>Street</p>
        <p>Zip-Code</p>
        <p>Town </p>
      </div>
    </ColumnWrapper>
  );
};

export default ProfilePage;
