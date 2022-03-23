import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from '../../Molecules/LeaderboardList/LeaderboardList';
import MainButton from '../../Atoms/MainButton/MainButton';
import PenaltyOrDisqualifiedLine from '../../Atoms/Leaderboard/PenaltyOrDisqualifiedLine';
import SummaryLine from '../../Atoms/Leaderboard/SummaryLine';
import { updateExercisesPoints } from '../../Tools/FetchData/fetchContestsfunctions';

const DogSummaryPage = () => {
  const { contestId, classId, dogId } = useParams();
  const locationPath = useLocation();
  const navigate = useNavigate();
  const dogPerformance = locationPath.state.dogPerformance.dogPerformance;
  const resultId = locationPath.state.resultId;

  const sendDataHandler = async (event) => {
    event.preventDefault();

    let updateOfResult = {
      specialState: dogPerformance.specialState,
      summaryResult: dogPerformance.summaryResult,
      exercises: dogPerformance.exercises,
    };

    const isUpdated = await updateExercisesPoints(resultId, updateOfResult);
    if (isUpdated) {
      navigate(`/contests/${contestId}/classes/${classId}`);
    } else {
      alert('Nie udało się zapisać danych, spróbuj jeszcze raz');
    }
  };

  return (
    <ColumnWrapper>
      <LeaderboardList
        contestId={contestId}
        classId={classId}
        dogName={dogId}
        result={dogPerformance.exercises}
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
