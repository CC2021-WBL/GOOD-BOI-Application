import LeaderboardListElementStyled from './LeaderboardListElementStyled';
import propTypes from 'prop-types';

const LeaderboardListElement = ({ text, score, index, disqualified }) => {
  return (
    <LeaderboardListElementStyled disqualified={disqualified}>
      <div className="index">{index + 1}.</div>
      {/* excersizes becomes dog's name in class view leaderboard */}
      <div className="excersises">{text}</div>
      {/* single excersise points become total sum of points of all excersises in a class */}
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
