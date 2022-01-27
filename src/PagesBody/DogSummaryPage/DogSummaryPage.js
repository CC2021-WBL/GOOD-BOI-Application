import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import MainButton from './../../Atoms/MainButton/MainButton';
import PenaltyOrDisqualifiedLine from '../../Atoms/Leaderboard/PenaltyOrDisqualifiedLine';
import SummaryLine from '../../Atoms/Leaderboard/SummaryLine';
import WYNIK_RANDOMOWEGO_PSA from './../../Data/Dummy-data/RandomDogResult';

const sendDataHandler = () => {};

const DogSummaryPage = () => {
  return (
    <CardWrapper column>
      <LeaderboardList result={WYNIK_RANDOMOWEGO_PSA} />
      <PenaltyOrDisqualifiedLine result={WYNIK_RANDOMOWEGO_PSA} />
      <SummaryLine result={WYNIK_RANDOMOWEGO_PSA} />
      <MainButton
        text="lista kompletna - wyślij dane"
        secondary
        onClick={sendDataHandler}
      />
    </CardWrapper>
  );
};

export default DogSummaryPage;
