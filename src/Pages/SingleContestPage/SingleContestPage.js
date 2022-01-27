import LeaderboardClassResult from './../../Data/Dummy-data/leaderboardClassResults';
import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import MainButtonStyled from './../../Atoms/MainButton/MainButton';

const SingleContestPage = () => {
  // below method sorts the array in descending order
  // class0 results are in LeaderboardClassResults[0]
  const sortedLeaderboardClassResults = LeaderboardClassResult[0].sort(
    (a, b) => {
      return b.score - a.score;
    },
  );
  return (
    <>
      <h1>I am a single Contest Page Component</h1>
      <LeaderboardList result={sortedLeaderboardClassResults} />
      <br></br>
      <MainButtonStyled primary text="drukuj protokół" />
    </>
  );
};

export default SingleContestPage;
