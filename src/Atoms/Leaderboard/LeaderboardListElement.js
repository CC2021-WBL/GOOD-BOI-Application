import propTypes from 'prop-types';
import LeaderboardListElementStyled from './LeaderboardListElementStyled';

const LeaderboardListElement = ({ text, score, index }) => {
  return (
    <LeaderboardListElementStyled>
      <div className="justifyLeft">
        {index + 1}. {text}
      </div>
      <div className="justifyRight">{score}</div>
    </LeaderboardListElementStyled>
  );
};

LeaderboardListElement.propTypes = {
  text: propTypes.string,
  score: propTypes.number,
  index: propTypes.number,
};

export default LeaderboardListElement;
