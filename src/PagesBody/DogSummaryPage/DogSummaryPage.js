import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import MainButton from './../../Atoms/MainButton/MainButton';
import PenaltyOrDisqualifiedLine from '../../Atoms/Leaderboard/PenaltyOrDisqualifiedLine';
import SummaryLine from '../../Atoms/Leaderboard/SummaryLine';
import WYNIK_RANDOMOWEGO_PSA from './../../Data/Dummy-data/RandomDogResult';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const sendDataHandler = () => {};

const DogSummaryPage = () => {
  return (
    <ColumnWrapper>
      <LeaderboardList result={WYNIK_RANDOMOWEGO_PSA} />
      <PenaltyOrDisqualifiedLine result={WYNIK_RANDOMOWEGO_PSA} />
      <SummaryLine result={WYNIK_RANDOMOWEGO_PSA} />
      <ColumnWrapper paddingLeftRight={1}>
        <MainButton
          text="lista kompletna - wyślij dane"
          secondary
          onClick={sendDataHandler}
        />
      </ColumnWrapper>
    </ColumnWrapper>
  );
};

export default DogSummaryPage;
