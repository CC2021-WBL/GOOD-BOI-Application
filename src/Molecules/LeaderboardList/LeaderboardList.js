/* eslint-disable react/prop-types */

import LeaderboardListElement from '../../Atoms/Leaderboard/LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';
import calculateExerciseScore from '../../Tools/calculateExerciseScore';
import checkIfDisqualified from '../../Tools/checkIfDisqualified';
import contests from '../../Data/MongoDBMock/contests';
import individualSummaryInCurrentCompetiton from '../../Data/MongoDBMock/summaryResults';
import propTypes from 'prop-types';
import translateExerciseCode2string from '../../Tools/translateExerciseCode2string';

// import { useLocation } from 'react-router-dom';

const LeaderboardList = ({ classId, dogName, contestId, result }) => {
  // const locationPath = useLocation();
  // dopisujemy penaltyPoints
  result.penaltyPoints = -10;
  // result.specialState = 'dyskwalifikacja';
  console.log('dogPerformanceData');
  console.log(result);
  console.log('checkIfDisqualified');
  console.log(checkIfDisqualified({ result }));
  // if dogName is defined, then render dog-summary leaderboard
  if (dogName) {
    const exercisesList = result;
    const dogSummaryResult = exercisesList.map((elem) => ({
      text: translateExerciseCode2string(classId, elem.codeName),
      score: calculateExerciseScore(classId, elem.codeName) * elem.result,
    }));
    {
      return (
        <LeaderboardListStyled>
          {dogSummaryResult.map((arrElement, index) => {
            if (checkIfDisqualified === false) {
              return (
                <LeaderboardListElement
                  key={index}
                  text={arrElement.text}
                  score={arrElement.score}
                  index={index}
                />
              );
            } else {
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
