import PenaltyOrDisqualifiedLineStyled from './PenaltyOrDisqualifiedLineStyled';
import checkIfDisqualified from '../../Tools/checkIfDisqualified';
import propTypes from 'prop-types';

const PenaltyOrDisqualifiedLine = ({ result }) => {
  // check if penalties exists
  // const penaltiesExist = result.some((element) => {
  //   return element.penaltyPoints;
  // });
  const penaltiesExist = () => {
    if (result.penaltyPoints) return true;
  };
  // if exists, create new arr with penalties only
  // const penaltyArr = result.map((penalty) => {
  //   if (penalty.penaltyPoints) {
  //     return penalty.penaltyPoints;
  //   } else return 0;
  // });

  // const penaltyScore = penaltyArr.reduce((accu, val) => {
  //   return accu + val;
  // });
  const penaltyScore = result.penaltyPoints;

  if (checkIfDisqualified({ result })) {
    return (
      <PenaltyOrDisqualifiedLineStyled disqualifiedColor>
        Dyskwalifikacja
      </PenaltyOrDisqualifiedLineStyled>
    );
  } else if (penaltiesExist && !checkIfDisqualified({ result })) {
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
