import { useLocation, useParams } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from '../../Molecules/LeaderboardList/LeaderboardList';
import MainButton from './../../Atoms/MainButton/MainButton';
import PenaltyOrDisqualifiedLine from '../../Atoms/Leaderboard/PenaltyOrDisqualifiedLine';
import SummaryLine from '../../Atoms/Leaderboard/SummaryLine';

const sendDataHandler = () => {};

const DogSummaryPage = () => {
  const { contestId, classId, dogId } = useParams();
  const locationPath = useLocation();
  const dogPerformance = locationPath.state.dogPerformance.dogPerformance;

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
