import LeaderboardList from '../../Atoms/Leaderboard/LeaderboardList';
import WYNIK_RANDOMOWEGO_PSA from '../../Atoms/Leaderboard/RandomDogResult';

const SingleSummaryPage = () => {
  return <LeaderboardList result={WYNIK_RANDOMOWEGO_PSA} />;
};

export default SingleSummaryPage;
