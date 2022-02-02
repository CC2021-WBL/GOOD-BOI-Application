import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from '../../Molecules/LeaderboardList/LeaderboardList';
import MainButtonStyled from './../../Atoms/MainButton/MainButton';
import { useParams } from 'react-router-dom';

// Leaderboardlist eventually will accept two props when rendered on PAST CONTEST LEADERBOARD PAGE
// Leaderboardlist eventually will accept three props when rendered on DOG SUMMARY PAGE

// TODO: useParams contestId, classId
const LeaderboardPage = () => {
  const { contestId, classId } = useParams();
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <h1>I am leaderboard page</h1>
      <LeaderboardList contestId={contestId} classId={classId} />
      <div>
        <br></br>
      </div>
      <MainButtonStyled primary text="drukuj protokół" />
    </ColumnWrapper>
  );
};

export default LeaderboardPage;
