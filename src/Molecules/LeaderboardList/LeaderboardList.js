import LeaderboardListElement from '../../Atoms/Leaderboard/LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';
import calculateExerciseScore from '../../Tools/calculateExerciseScore';
import checkIfDisqualified from '../../Tools/checkIfDisqualified';
import contests from '../../Data/MongoDBMock/contests';
import exerciseCode2string from '../../Tools/exerciseCode2string';
import individualSummaryInCurrentCompetiton from '../../Data/MongoDBMock/summaryResults';
import propTypes from 'prop-types';

const LeaderboardList = ({ classId, dogName, contestId, result }) => {
  // if dogName is defined, then render dog-summary leaderboard
  if (dogName) {
    const dogSummaryResult = result.map((elem) => ({
      text: exerciseCode2string(classId, elem.codeName),
      score: calculateExerciseScore(classId, elem.codeName) * elem.result,
    }));
    {
      return (
        <LeaderboardListStyled>
          {dogSummaryResult.map((arrElement, index) => {
            if (!checkIfDisqualified({ result })) {
              console.log('runing without disqualified');
              return (
                <LeaderboardListElement
                  key={index}
                  text={arrElement.text}
                  score={arrElement.score}
                  index={index}
                />
              );
            } else {
              console.log('runing with disqualified');
              return (
                <LeaderboardListElement
                  key={index}
                  text={arrElement.text}
                  score={arrElement.score}
                  index={index}
                  disqualified
                />
              );
            }
          })}
        </LeaderboardListStyled>
      );
    }
  } else {
    // else if dogName is not defined, render Past Contest leaderboard
    const contest = contests.find((contest) => contest.contestId === contestId);

    const resultsArr = contest.obedienceClasses[classId];
    if (resultsArr) {
      let resultsIdArr = resultsArr.map((obj) => obj.competingPairsId);

      const finalLeaderboardArr = resultsIdArr.map((competingPairsId) => {
        let DogSummary = individualSummaryInCurrentCompetiton.find(
          (summary) => summary.competingPairsId === competingPairsId,
        );
        return {
          text: DogSummary.dogName,
          score: DogSummary.summaryResult,
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
  result: propTypes.any,
};
export default LeaderboardList;
