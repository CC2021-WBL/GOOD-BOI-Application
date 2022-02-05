import LeaderboardListElement from '../../Atoms/Leaderboard/LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';
import calculateExerciseScore from '../../Tools/calculateExerciseScore';
import contests from '../../Data/MongoDBMock/contests';
import individualSummaryInCurrentCompetiton from '../../Data/MongoDBMock/summaryResults';
import propTypes from 'prop-types';
import translateExerciseCode2string from '../../Tools/translateExerciseCode2string';

const LeaderboardList = ({ classId, dogName, contestId }) => {
  if (dogName) {
    const retrievedObject = localStorage.getItem('performanceObject');
    const retrivedPerformanceObject = JSON.parse(retrievedObject);
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
    const contest = contests.find((contest) => contest.contestId === contestId);

    // let className;
    // classId === 'Klasa 0' && (className = '0');
    // classId === 'Klasa 1' && (className = '1');
    // classId === 'Klasa 2' && (className = '2');

    const resultsArr = contest.obedienceClasses[classId];
    if (resultsArr) {
      let resultsIdArr = resultsArr.map((obj) => obj.competingPairsId);

      const finalLeaderboardArr = resultsIdArr.map((competingPairsId) => {
        let fakeDogSummary = individualSummaryInCurrentCompetiton.find(
          (summary) => summary.competingPairsId === competingPairsId,
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
                score={arrElement.score}
                index={index}
                // disqualified={disqualified}
              />
            );
          })}
        </LeaderboardListStyled>
      );
    } else {
      return (
        <>
          <h2>
            <br></br>Error! Brak danych dla tej kombinacji klasy i psa!
          </h2>
        </>
      );
    }
  }
};

LeaderboardList.propTypes = {
  contestId: propTypes.string,
  classId: propTypes.string,
  dogName: propTypes.string,
  performanceObject: propTypes.object,
};
export default LeaderboardList;
