import LeaderboardListElementStyled from './LeaderboardListElementStyled';
import propTypes from 'prop-types';

const LeaderboardListElement = ({ text, score, index, disqualified }) => {
  if (disqualified) {
    return (
      <LeaderboardListElementStyled disqualified>
        <div className="index">{index + 1}.</div>
        <div className="exercises">{text}</div>
        <div className="points">{score}</div>
      </LeaderboardListElementStyled>
    );
  } else {
    return (
      <LeaderboardListElementStyled>
        <div className="index">{index + 1}.</div>
        <div className="exercises">{text}</div>
        <div className="points">{score}</div>
      </LeaderboardListElementStyled>
    );
  }
};

LeaderboardListElement.propTypes = {
  text: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
  index: propTypes.number,
  disqualified: propTypes.any,
};

export default LeaderboardListElement;
