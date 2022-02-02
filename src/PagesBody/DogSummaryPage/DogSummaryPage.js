import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList_new from './../../Molecules/LeaderboardList/LeaderboardList_new';
import MainButton from './../../Atoms/MainButton/MainButton';
import { useParams } from 'react-router-dom';

// import WYNIK_RANDOMOWEGO_PSA from './../../Data/Dummy-data/RandomDogResult';

// import PenaltyOrDisqualifiedLine from '../../Atoms/Leaderboard/PenaltyOrDisqualifiedLine';
// import SummaryLine from '../../Atoms/Leaderboard/SummaryLine';

const sendDataHandler = () => {};

const DogSummaryPage = () => {
  let { contestId, classId, dogId } = useParams();
  return (
    <ColumnWrapper>
      <LeaderboardList_new
        contestId={contestId}
        classId={classId}
        dogName={dogId}
      />
      {/* <PenaltyOrDisqualifiedLine result={WYNIK_RANDOMOWEGO_PSA} />
      <SummaryLine result={WYNIK_RANDOMOWEGO_PSA} /> */}
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

{
  /* <Route
path="contests/:contestId/classes/:classId/leaderboard"
element={<LeaderboardPage />}
/>
<Route
path="contests/:contestId/classes/:classId/:dogId"
element={<ExercisesPage />}
/>
<Route
path="contests/:contestId/classes/:classId/:dogId/dogSummary"
element={<DogSummaryPage />} */
}
