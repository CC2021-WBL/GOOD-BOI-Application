import propTypes from 'prop-types';
import { useEffect, useState } from 'react';

import LeaderboardListElement from '../../Atoms/Leaderboard/LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';
import Spinner from '../../Atoms/Spinner/Spinner';
import calculateExerciseScore from '../../Tools/calculateExerciseScore';
import checkIfDisqualified from '../../Tools/checkIfDisqualified';
import exerciseCode2string from '../../Tools/exerciseCode2string';
import {
  getExercisesPoints,
  getResultsForClassInContest,
} from '../../Tools/FetchData/fetchContestsfunctions';

const LeaderboardList = ({ classId, dogId, contestId, result }) => {
  const [individualResult, setIndividualResult] = useState(null);
  const [classResult, setClassResult] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // if dogId is defined, then render dog-summary leaderboard

  useEffect(() => {
    async function fetchResults() {
      if (dogId) {
        const resultDoc = await getExercisesPoints(dogId, contestId);
        const dogSummaryResult = resultDoc.exercises.map((elem) => ({
          text: exerciseCode2string(classId, elem.codeName),
          score: calculateExerciseScore(classId, elem.codeName) * elem.result,
        }));
        setIndividualResult(dogSummaryResult);
        setIsPending(false);
      } else {
        const results = await getResultsForClassInContest(contestId, classId);

        const leaderboardArr = results.map((result) => {
          return {
            text: result.dogName,
            score: result.summaryResult,
          };
        });

        const sortedLeaderboard = leaderboardArr.sort(
          (a, b) => b.score - a.score,
        );

        console.log(sortedLeaderboard);
        setClassResult(sortedLeaderboard);
        setIsPending(false);
      }
    }
    fetchResults();
  }, []);

  if (individualResult && individualResult.length > 0) {
    return (
      <LeaderboardListStyled>
        {individualResult.map((arrElement, index) => {
          if (!checkIfDisqualified({ result })) {
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
  } else if (classResult && classResult.length > 0) {
    return (
      <LeaderboardListStyled>
        {classResult.map((arrElement, index) => {
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
  } else if (isPending) {
    return <Spinner />;
  } else {
    return (
      <>
        <h2>
          <br></br>Brak wyników
        </h2>
      </>
    );
  }
};

LeaderboardList.propTypes = {
  contestId: propTypes.string,
  classId: propTypes.string,
  dogName: propTypes.string,
  result: propTypes.any,
};
export default LeaderboardList;
