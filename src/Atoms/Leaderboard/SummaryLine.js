import SummaryLineStyled from './SummaryLineStyled';
import calculateExerciseScore from './../../Tools/calculateExerciseScore';
import propTypes from 'prop-types';

// TODO: import penaltyScore from '../../Tools/penaltyScoreCalc';
// TODO: Penalty points will be calculated after entries in the database will be created on ExercisesPage

const SummaryLine = ({ result, classId }) => {
  const exercisesArr = result.exercises;
  console.log(exercisesArr);
  const scoresArr = exercisesArr.map((score) => {
    return score.result * calculateExerciseScore(classId, score.codeName);
  });
  const score = scoresArr.reduce((accu, val) => {
    return accu + val;
  });
  const totalScore = score;
  // TODO: + penaltyScore({ result });

  const isDisqualified = exercisesArr.some((element) => element.disqualified);
  function pointsAquired() {
    if (totalScore < 5 && totalScore > 1) {
      return 'punkty.';
    } else if (totalScore == 1) {
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
  result: propTypes.object,
  classId: propTypes.string,
};

export default SummaryLine;
