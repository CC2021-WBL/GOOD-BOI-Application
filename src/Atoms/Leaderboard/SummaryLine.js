import SummaryLineStyled from './SummaryLineStyled';
import penaltyScore from '../../Tools/penaltyScoreCalc';
import propTypes from 'prop-types';

const SummaryLine = ({ result }) => {
  const scoresArr = result.map((score) => {
    return score.score;
  });
  const score = scoresArr.reduce((accu, val) => {
    return accu + val;
  });
  const totalScore = score + penaltyScore({ result });

  const isDisqualified = result.some((element) => element.disqualified);
  // points aquired by a dog in all excersizes/tests at one selected class
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
  result: propTypes.array,
};

export default SummaryLine;
