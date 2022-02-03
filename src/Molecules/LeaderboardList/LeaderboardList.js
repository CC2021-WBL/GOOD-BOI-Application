import LeaderboardListElement from '../../Atoms/Leaderboard/LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';
import calculateExerciseScore from '../../Tools/calculateExerciseScore';
import contestsRS from '../../Data/MongoDBMock/contestsRS';
import individualSummaryInCurrentCompetiton from '../../Data/MongoDBMock/summaryResults';
import propTypes from 'prop-types';
import translateExerciseCode2string from '../../Tools/translateExerciseCode2string';

const LeaderboardList = ({ classId, dogName, contestId }) => {
  if (dogName) {
    const retrievedObject = localStorage.getItem('performanceObject');
    const retrivedPerformanceObject = JSON.parse(retrievedObject);
    // console.log(retrievedObject);
    console.log('LeaderboardList dogname: ' + dogName + ' classId: ' + classId);
    const exercisesList = retrivedPerformanceObject.exercises;
    const dogSummaryResult = exercisesList.map((elem) => ({
      text: translateExerciseCode2string(classId, elem.codeName),
      score: calculateExerciseScore(classId, elem.codeName) * elem.result,
    }));
    {
      return (
        <LeaderboardListStyled>
          {dogSummaryResult.map((arrElement, index) => {
            return (
              <LeaderboardListElement
                key={index}
                text={arrElement.text}
                score={arrElement.score}
                index={index}
                // disqualified={disqualified}
              />
            );
          })}
        </LeaderboardListStyled>
      );
    }
  } else {
    // ==============================================================PastContestPage=======
    const fakeContest = contestsRS.find((contest) => contest.id === contestId);
    const fakeClassResult = fakeContest.obedienceClasses.find(
      (classObj) => classObj.classNumber === classId,
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
    const sortedLeaderboardClassResults = finalLeaderboardArr.sort(
      (a, b) => b.score - a.score,
    );
    // =============================================================PastContestPage========

    return (
      <LeaderboardListStyled>
        {sortedLeaderboardClassResults.map((arrElement, index) => {
          return (
            <LeaderboardListElement
              key={index}
              text={arrElement.text}
              score={arrElement.score}
              index={index}
              // disqualified={disqualified}
            />
          );
        })}
      </LeaderboardListStyled>
    );
  }
};

LeaderboardList.propTypes = {
  contestId: propTypes.string,
  classId: propTypes.string,
  dogName: propTypes.string,
  performanceObject: propTypes.object,
};
export default LeaderboardList;
