import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import MainButtonStyled from './../../Atoms/MainButton/MainButton';

// Leaderboardlist eventually will accept two props when rendered on PAST CONTEST LEADERBOARD PAGE
// Leaderboardlist eventually will accept three props when rendered on DOG SUMMARY PAGE

const LeaderboardPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <h1>I am leaderboard page</h1>
      <LeaderboardList
        contestId={'a0347677-c3c9-4edc-9d46-fed4a958fdc2'}
        classId={'0'}
      />
      <div>
        <br></br>
      </div>
      <MainButtonStyled primary text="drukuj protokół" />
    </ColumnWrapper>
  );
};

export default LeaderboardPage;
