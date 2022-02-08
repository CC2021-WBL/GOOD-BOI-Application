import { useLocation, useParams } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from '../../Molecules/LeaderboardList/LeaderboardList';
import MainButton from './../../Atoms/MainButton/MainButton';
import { NewContestContext } from './../../Context/NewContestContext';
import PenaltyOrDisqualifiedLine from '../../Atoms/Leaderboard/PenaltyOrDisqualifiedLine';
import SummaryLine from '../../Atoms/Leaderboard/SummaryLine';
import { useContext } from 'react';

// TODO: Penalty points will be calculated after entries in the database will be created on ExercisesPage

const sendDataHandler = () => {};

const DogSummaryPage = () => {
  // const dogPerformance = useContext(NewContestContext);
  const { contestId, classId, dogId } = useParams();
  const locationPath = useLocation();
  console.log('dogPerformance z contextu');
  // console.log(dogPerformance);
  console.log(locationPath.state);
  // const dogPerformanceData = locationPath.state.dogPerformance.dogPerformance;

  return (
    <ColumnWrapper>
      <LeaderboardList
        contestId={contestId}
        classId={classId}
        dogName={dogId}
        result={dogPerformance}
      />
      <PenaltyOrDisqualifiedLine result={dogPerformance} />
      <SummaryLine result={dogPerformance} classId={classId} />
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
