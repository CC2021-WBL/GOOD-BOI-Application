import SummaryLineStyled from './SummaryLineStyled';
import propTypes from 'prop-types';
import { penaltyScore } from './TotalDogScoreCalc';

const SummaryLine = ({ result }) => {
  const scoresArr = result.map((score) => {
    return score.score;
  });
  const score = scoresArr.reduce((accu, val) => {
    return accu + val;
  });

  const isDisqualified = result.some((element) => element.disqualified);
  function punkty() {
    if (score < 5 && score > 1) {
      return 'punkty.';
    } else if (score == 1) {
      return 'punkt.';
    } else return 'punktów.';
  }
  return (
    <SummaryLineStyled>
      <div>
        {isDisqualified
          ? 'Zawodnik zdyskwalifikowany'
          : `Uczestnik zdobył ${score + penaltyScore} ${punkty()}`}
      </div>
    </SummaryLineStyled>
  );
};

SummaryLine.propTypes = {
  result: propTypes.array,
};

export default SummaryLine;
