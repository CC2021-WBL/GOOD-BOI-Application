import LeaderboardListElement from './../../Atoms/Leaderboard/LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';
import contestsRS from '../../Data/MongoDBMock/contestsRS';
import individualSummaryInCurrentCompetiton from '../../Data/MongoDBMock/summaryResults';
import propTypes from 'prop-types';

// TODO: import checkIfDisqualified from '../../Tools/checkIfDisqualified';

// This page is a PAST CONTEST LEADERBOARD PAGE http://localhost:3000/contests/contestId/classes/classNumber/leaderboard

const LeaderboardList = ({ contestId, classId }) => {
  // TODO: let disqualified =
  // checkIfDisqualified({ result }) === true ? 'disqualifiedColor' : '';
  const fakeContest = contestsRS.find((contest) => contest.id === contestId);
  const fakeClassResult = fakeContest.obedienceClasses.find(
    (classObj) => classObj.classNumber === classId,
  );
  console.log('fakeClassResukt ' + fakeClassResult);
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
  const sortedLeaderboardClassResults = finalLeaderboardArr.sort(
    (a, b) => b.score - a.score,
  );
  return (
    <LeaderboardListStyled>
      {sortedLeaderboardClassResults.map((arrElement, index) => {
        return (
          <LeaderboardListElement
            key={index}
            text={arrElement.text}
            // text={performanceObject.text}
            score={arrElement.score}
            // score={performanceObject.result}
            index={index}
            // disqualified={disqualified}
          />
        );
      })}
    </LeaderboardListStyled>
  );
};

LeaderboardList.propTypes = {
  // result: propTypes.array.isRequired,
  contestId: propTypes.string,
  classId: propTypes.string,
  dogName: propTypes.string,
  performanceObject: propTypes.object,
};
export default LeaderboardList;
