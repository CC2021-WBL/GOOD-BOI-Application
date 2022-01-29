import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import MainButton from './../../Atoms/MainButton/MainButton';
import PenaltyOrDisqualifiedLine from '../../Atoms/Leaderboard/PenaltyOrDisqualifiedLine';
import SummaryLine from '../../Atoms/Leaderboard/SummaryLine';
import WYNIK_RANDOMOWEGO_PSA from './../../Data/Dummy-data/RandomDogResult';

const sendDataHandler = () => {};

const fakeId = 'a0347677-c3c9-4edc-9d46-fed4a958fdc2';
const fakeClass = '1';
const fakeDogName = 'Kluska';

const DogSummaryPage = () => {
  return (
    <ColumnWrapper>
      <LeaderboardList result={WYNIK_RANDOMOWEGO_PSA} />
      {/* <LeaderboardList contestId={fakeId} classNumber={fakeClass} dogName={fakeDogName}/> */}
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
