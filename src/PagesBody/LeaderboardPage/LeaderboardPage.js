import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import MainButtonStyled from './../../Atoms/MainButton/MainButton';
import { useParams } from 'react-router-dom';

const LeaderboardPage = () => {
  const { contestId, classId } = useParams();
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <LeaderboardList contestId={contestId} classId={classId} />
      <div>
        <br></br>
      </div>
      <MainButtonStyled primary text="drukuj protokół" />
    </ColumnWrapper>
  );
};

export default LeaderboardPage;
