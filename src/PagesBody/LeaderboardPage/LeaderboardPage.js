import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardClassResult from './../../Data/Dummy-data/leaderboardClassResults';
import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import MainButtonStyled from './../../Atoms/MainButton/MainButton';

const LeaderboardPage = () => {
  // below method sorts the array in descending order
  // class0 results are in LeaderboardClassResults[0]
  // classid -> class 0 -> [0]
  const sortedLeaderboardClassResults = LeaderboardClassResult[0].sort(
    (a, b) => {
      return b.score - a.score;
    },
  );
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <h1>I am leaderboard page</h1>
      <LeaderboardList result={sortedLeaderboardClassResults} />
      <br></br>
      <MainButtonStyled primary text="drukuj protokół" />
    </ColumnWrapper>
  );
};

export default LeaderboardPage;
