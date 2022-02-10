import PenaltyOrDisqualifiedLineStyled from './PenaltyOrDisqualifiedLineStyled';
import propTypes from 'prop-types';

const PenaltyOrDisqualifiedLine = ({ result }) => {
  if (typeof result.specialState === 'string') {
    return (
      <PenaltyOrDisqualifiedLineStyled disqualifiedColor>
        Dyskwalifikacja
      </PenaltyOrDisqualifiedLineStyled>
    );
  } else if (typeof result.specialState === 'number') {
    console.log(result.specialState);
    switch (result.specialState) {
      case 0:
        return null;
      case -10:
        return (
          <PenaltyOrDisqualifiedLineStyled>
            <div>Żółta kartka</div>
            <div>{result.specialState}</div>
          </PenaltyOrDisqualifiedLineStyled>
        );
      case -20:
        return (
          <PenaltyOrDisqualifiedLineStyled disqualifiedColor>
            Dyskwalifikacja
          </PenaltyOrDisqualifiedLineStyled>
        );
      default:
        return null;
    }
  }
};
PenaltyOrDisqualifiedLine.propTypes = {
  result: propTypes.any,
};

export default PenaltyOrDisqualifiedLine;
