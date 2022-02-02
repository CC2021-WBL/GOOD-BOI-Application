import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList_new from './../../Molecules/LeaderboardList/LeaderboardList_new';
import MainButtonStyled from './../../Atoms/MainButton/MainButton';

// Leaderboardlist eventually will accept two props when rendered on PAST CONTEST LEADERBOARD PAGE
// Leaderboardlist eventually will accept three props when rendered on DOG SUMMARY PAGE

// TODO: useParams contestId, classId
const LeaderboardPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <h1>I am leaderboard page</h1>
      <LeaderboardList_new contestId={contestId} classId={classId} />
      <div>
        <br></br>
      </div>
      <MainButtonStyled primary text="drukuj protokół" />
    </ColumnWrapper>
  );
};

export default LeaderboardPage;
