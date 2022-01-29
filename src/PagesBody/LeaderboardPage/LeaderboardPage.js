import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import LeaderboardList from './../../Molecules/LeaderboardList/LeaderboardList';
import MainButtonStyled from './../../Atoms/MainButton/MainButton';
import contestsRS from '../../Data/MongoDBMock/contestsRS';
import individualSummaryInCurrentCompetiton from '../../Data/MongoDBMock/summaryResults';

const fakeId = 'a0347677-c3c9-4edc-9d46-fed4a958fdc2';
const fakeClass = '1';

const LeaderboardPage = () => {
  // contestId: 'a0347677-c3c9-4edc-9d46-fed4a958fdc2',

  // console.log(contests);RS
  const fakeContest = contestsRS.find((contest) => contest.id === fakeId);
  // console.log(fakeContest);
  // console.log(fakeContest.obedienceClasses);
  const fakeClassResult = fakeContest.obedienceClasses.find(
    (classObj) => classObj.classNumber === fakeClass,
  );
  // console.log(fakeClassResult);
  // console.log(fakeClassResult.competingPairs);
  let resultsIdArr = fakeClassResult.competingPairs.map(
    (object) => object.summaryId,
  );
  console.log(resultsIdArr);

  // const fakeDogSummaryId = '22-03-22Woof';
  // const fakeDogSummary = individualSummaryInCurrentCompetiton.find(
  //   (summary) => summary.competingPairsId === fakeDogSummaryId,
  // );
  // console.log(fakeDogSummary);
  // const fakeDogResult = {
  //   text: fakeDogSummary.dogName,
  //   score: fakeDogSummary.summaryResult,
  // };

  // console.log(fakeDogResult);
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
      {/* <LeaderboardList contestId={fakeId} classNumber={fakeClass} /> */}
      <br></br>
      <MainButtonStyled primary text="drukuj protokół" />
    </ColumnWrapper>
  );
};

export default LeaderboardPage;
