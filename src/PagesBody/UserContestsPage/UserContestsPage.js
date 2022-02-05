import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestFilterToggler from '../../Organisms/ContestFilterHarmonica/ContestFilterToggler';

const UserContestPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
      <ContestFilterToggler />
    </ColumnWrapper>
  );
};

export default UserContestPage;
