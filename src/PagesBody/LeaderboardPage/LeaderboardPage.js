import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DOGS from '../../Data/MongoDBMock/test-data-dogsRS';
import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import MainButtonStyled from './../../Atoms/MainButton/MainButton';
import calculateExersiseScore from '../../Data/MongoDBMock/calculateExersiseScore';
import contestsRS from '../../Data/MongoDBMock/contestsRS';
import individualSummaryInCurrentCompetiton from '../../Data/MongoDBMock/summaryResults';
import translateExersiseCode2string from '../../Data/MongoDBMock/translateExersiseCode2string';

// This page is a PAST CONTEST LEADERBOARD PAGE http://localhost:3000/contests/contestId/classes/classNumber/leaderboard
// These constants will become props/context as input for the LeaderboardList component
const fakeId = 'a0347677-c3c9-4edc-9d46-fed4a958fdc2';
const fakeClass = '0';
const fakeContest = contestsRS.find((contest) => contest.id === fakeId);
const fakeClassResult = fakeContest.obedienceClasses.find(
  (classObj) => classObj.classNumber === fakeClass,
);
let resultsIdArr = fakeClassResult.competingPairs.map(
  (object) => object.summaryId,
  //'22-03-22Woof','22-03-22Nosek','22-03-22Ptysio',
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

// ===============================================================
// below code is for displaying dogSummary leaderboard
const fejkDogName = 'Woof';
// finding selected dog in the object
const fejkContest = DOGS.find((obJ) => obJ.dogName === fejkDogName);
const dogPerformances = fejkContest.performances.find(
  (obJ) => obJ.contestId === fakeId,
);
const exersisesList = dogPerformances.exercises;
// eslint-disable-next-line no-unused-vars
const dogSummaryResult = exersisesList.map((elem) => {
  return {
    text: translateExersiseCode2string(fakeClass, elem.codeName),
    score: calculateExersiseScore(fakeClass, elem.codeName) * elem.result,
  };
});
// ===============================================================
const LeaderboardPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <h1>I am leaderboard page</h1>
      {/* props contestId, props classNumber */}
      <LeaderboardList result={sortedLeaderboardClassResults} />
      <LeaderboardList result={dogSummaryResult} />
      {/* <LeaderboardList contestId={fakeId} classNumber={fakeClass} dogName={fakeDogName}/> */}
      <div>
        <br></br>
      </div>
      <MainButtonStyled primary text="drukuj protokół" />
    </ColumnWrapper>
  );
};

export default LeaderboardPage;
