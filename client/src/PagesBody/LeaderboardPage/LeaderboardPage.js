import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from '../../Molecules/LeaderboardList/LeaderboardList';
import MainButtonStyled from '../../Atoms/MainButton/MainButton';
import { useParams } from 'react-router-dom';

const LeaderboardPage = () => {
  const { contestId, classId } = useParams();
  const { state } = useContext(UserDataContext);
  const { roles, isAuthenticated } = state;

  const isAllowedToGetDocs = () => {
    const isAllowed =
      isAuthenticated &&
      Array.isArray(roles) &&
      roles.include(ROLE_NAME.STAFF || ROLE_NAME.MANAGER || ROLE_NAME.ADMIN);
    console.log(isAllowed);
    return isAllowed;
  };
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <LeaderboardList contestId={contestId} classId={classId} />
      <div>
        <br></br>
      </div>
      {isAllowedToGetDocs() && (
        <MainButtonStyled primary text="drukuj protokół" />
      )}
    </ColumnWrapper>
  );
};

export default LeaderboardPage;
