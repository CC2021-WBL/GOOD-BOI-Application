import propTypes from 'prop-types';

import SummaryLineStyled from './SummaryLineStyled';
import calculateExerciseScore from '../../Tools/calculateExerciseScore';
import checkIfDisqualified from '../../Tools/checkIfDisqualified';
import penaltyScore from '../../Tools/penaltyScoreCalc';

const SummaryLine = ({ result, classId }) => {
  const exercisesArr = result.exercises;
  const scoresArr = exercisesArr.map((score) => {
    return score.result * calculateExerciseScore(classId, score.codeName);
  });
  const score = scoresArr.reduce((accu, val) => {
    return accu + val;
  });
  const totalScore = score + penaltyScore({ result });
  result.summaryResult = totalScore;
  const isDisqualified = checkIfDisqualified({ result });
  function pointsAquired() {
    if (totalScore < 5 && totalScore > 1) {
      return 'punkty.';
    } else if (totalScore === 1) {
      return 'punkt.';
    } else return 'punktów.';
  }
  return (
    <SummaryLineStyled>
      <div>
        {isDisqualified
          ? 'Zawodnik zdyskwalifikowany'
          : `Uczestnik zdobył ${totalScore}         
             ${pointsAquired()}`}
      </div>
    </SummaryLineStyled>
  );
};

SummaryLine.propTypes = {
  result: propTypes.any,
  classId: propTypes.string,
};

export default SummaryLine;
