import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import MainButton from './../../Atoms/MainButton/MainButton';
import SummaryLine from '../../Atoms/Leaderboard/SummaryLine';
import { useParams } from 'react-router-dom';

// TODO: import PenaltyOrDisqualifiedLine from '../../Atoms/Leaderboard/PenaltyOrDisqualifiedLine';
// TODO: Penalty points will be calculated after entries in the database will be created on ExercisesPage

const sendDataHandler = () => {};

const DogSummaryPage = () => {
  const { contestId, classId, dogId } = useParams();
  const retrievedObject = localStorage.getItem('performanceObject');
  const retrivedPerformanceObject = JSON.parse(retrievedObject);

  return (
    <ColumnWrapper>
      <LeaderboardList
        contestId={contestId}
        classId={classId}
        dogName={dogId}
      />
      {/* <PenaltyOrDisqualifiedLine result={WYNIK_RANDOMOWEGO_PSA} /> */}
      <SummaryLine result={retrivedPerformanceObject} classId={classId} />
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
