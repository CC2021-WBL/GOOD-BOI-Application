import { useLocation, useParams } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from '../../Molecules/LeaderboardList/LeaderboardList';
import MainButton from './../../Atoms/MainButton/MainButton';
import PenaltyOrDisqualifiedLine from '../../Atoms/Leaderboard/PenaltyOrDisqualifiedLine';
import SummaryLine from '../../Atoms/Leaderboard/SummaryLine';

// TODO: Penalty points will be calculated after entries in the database will be created on ExercisesPage

const sendDataHandler = () => {};

const DogSummaryPage = () => {
  const { contestId, classId, dogId } = useParams();
  const locationPath = useLocation();
  console.log(locationPath.state);
  const dogPerformanceData = locationPath.state.dogPerformance.dogPerformance;

  return (
    <ColumnWrapper>
      <LeaderboardList
        contestId={contestId}
        classId={classId}
        dogName={dogId}
        result={dogPerformanceData}
      />
      <PenaltyOrDisqualifiedLine result={dogPerformanceData} />
      <SummaryLine result={dogPerformanceData} classId={classId} />
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
