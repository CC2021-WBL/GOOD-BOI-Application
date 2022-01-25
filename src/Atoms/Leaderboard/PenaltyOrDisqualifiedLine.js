import PenaltyOrDisqualifiedLineStyled from './PenaltyOrDisqualifiedLineStyled';
import checkIfDisqualified from '../../Tools/checkIfDisqualified';
import propTypes from 'prop-types';

const PenaltyOrDisqualifiedLine = ({ result }) => {
  // check if penalties exists
  const penaltiesExist = result.some((element) => {
    return element.penalty;
  });

  // if exists, create new arr with penalties only
  const penaltyArr = result.map((penalty) => {
    if (penalty.penalty) {
      return penalty.penalty;
    } else return 0;
  });

  const penaltyScore = penaltyArr.reduce((accu, val) => {
    return accu + val;
  });

  if (checkIfDisqualified({ result })) {
    return (
      <PenaltyOrDisqualifiedLineStyled disqualifiedColor>
        Dyskwalifikacja
      </PenaltyOrDisqualifiedLineStyled>
    );
  } else if (penaltiesExist && !checkIfDisqualified) {
    return (
      <PenaltyOrDisqualifiedLineStyled>
        <div>Żółta kartka</div>
        <div>{penaltyScore}</div>
      </PenaltyOrDisqualifiedLineStyled>
    );
  } else {
    return null;
  }
};
PenaltyOrDisqualifiedLine.propTypes = {
  result: propTypes.array,
};

export default PenaltyOrDisqualifiedLine;
