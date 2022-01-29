import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import MainButtonStyled from './../../Atoms/MainButton/MainButton';
import contestsRS from '../../Data/MongoDBMock/contestsRS';
import individualSummaryInCurrentCompetiton from '../../Data/MongoDBMock/summaryResults';

// This page is a PAST CONTEST LEADERBOARD PAGE http://localhost:3000/contests/contestId/classes/classNumber/leaderboard
// These constants will become props as input for the LeaderboardList component
const fakeId = 'a0347677-c3c9-4edc-9d46-fed4a958fdc2';
const fakeClass = '1';

const LeaderboardPage = () => {
  const fakeContest = contestsRS.find((contest) => contest.id === fakeId);
  const fakeClassResult = fakeContest.obedienceClasses.find(
    (classObj) => classObj.classNumber === fakeClass,
  );
  let resultsIdArr = fakeClassResult.competingPairs.map(
    (object) => object.summaryId,
  );

  const finalLeaderboardArr = resultsIdArr.map((summaryId) => {
    let fakeDogSummary = individualSummaryInCurrentCompetiton.find(
      (summary) => summary.competingPairsId === summaryId,
    );
    return {
      text: fakeDogSummary.dogName,
      score: fakeDogSummary.summaryResult,
    };
  });

  // below method sorts the array in descending order
  const sortedLeaderboardClassResults = finalLeaderboardArr.sort(
    (a, b) => b.score - a.score,
  );
  console.log(finalLeaderboardArr);
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <h1>I am leaderboard page</h1>
      {/* props contestId, props classNumber */}
      <LeaderboardList result={sortedLeaderboardClassResults} />
      {/* <LeaderboardList contestId={fakeId} classNumber={fakeClass} dogName={fakeDogName}/> */}
      <div>
        <br></br>
      </div>
      <MainButtonStyled primary text="drukuj protokół" />
    </ColumnWrapper>
  );
};

export default LeaderboardPage;
