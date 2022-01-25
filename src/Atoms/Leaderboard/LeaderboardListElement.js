import LeaderboardListElementStyled from './LeaderboardListElementStyled';
import propTypes from 'prop-types';

const LeaderboardListElement = ({ text, score, index, disqualified }) => {
  return (
    <LeaderboardListElementStyled disqualified={disqualified}>
      <div className="index">{index + 1}.</div>
      <div className="excersises">{text}</div>
      <div className="points">{score}</div>
    </LeaderboardListElementStyled>
  );
};

LeaderboardListElement.propTypes = {
  text: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
  index: propTypes.number,
  disqualified: propTypes.string,
};

export default LeaderboardListElement;
