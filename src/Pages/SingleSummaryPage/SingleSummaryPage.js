import LeaderboardList from '../../Atoms/Leaderboard/LeaderboardList';
import WYNIK_RANDOMOWEGO_PSA from '../../Atoms/Leaderboard/RandomDogResult';
import SummaryLine from '../../Atoms/Leaderboard/SummaryLine';
import PenaltyOrDisqualifiedLine from '../../Atoms/Leaderboard/PenaltyOrDisqualifiedLine';
import MainButton from './../../Atoms/MainButton/MainButton';

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
