import MainButton from './../../Atoms/MainButton/MainButton';
import SummaryLine from '../../Atoms/Leaderboard/SummaryLine';
import WYNIK_RANDOMOWEGO_PSA from './../../Data/Dummy-data/RandomDogResult';
import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import PenaltyOrDisqualifiedLine from '../../Atoms/Leaderboard/PenaltyOrDisqualifiedLine';

const sendDataHandler = () => {
  console.log('lista kompletna - button clicked');
};

const SingleSummaryPage = () => {
  return (
    <>
      <LeaderboardList result={WYNIK_RANDOMOWEGO_PSA} />
      <PenaltyOrDisqualifiedLine result={WYNIK_RANDOMOWEGO_PSA} />
      <SummaryLine result={WYNIK_RANDOMOWEGO_PSA} />
      <MainButton
        text="lista kompletna - wyślij dane"
        secondary
        onClick={sendDataHandler}
      />
    </>
  );
};

export default SingleSummaryPage;
