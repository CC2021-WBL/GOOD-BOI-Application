import propTypes from 'prop-types';
import LeaderboardListElementStyled from './LeaderboardListElementStyled';

const LeaderboardListElement = ({ text, score, index }) => {
  return (
    <LeaderboardListElementStyled>
      <div className="index">{index + 1}.</div>
      <div className="excersizes">{text}</div>
      <div className="points">{score}</div>
    </LeaderboardListElementStyled>
  );
};

LeaderboardListElement.propTypes = {
  text: propTypes.string,
  score: propTypes.number,
  index: propTypes.number,
};

export default LeaderboardListElement;
