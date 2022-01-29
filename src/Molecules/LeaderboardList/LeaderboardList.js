import LeaderboardListElement from './../../Atoms/Leaderboard/LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';
import checkIfDisqualified from '../../Tools/checkIfDisqualified';
import propTypes from 'prop-types';

// Leaderboardlist will accept two props when rendered on PAST CONTEST LEADERBOARD PAGE
// Leaderboardlist will accept THREE props when rendered on DOG SUMMARY PAGE

const LeaderboardList = ({ result }) => {
  let disqualified =
    checkIfDisqualified({ result }) === true ? 'disqualifiedColor' : '';
  return (
    // list of leaderboard Woof/dogSummary
    <LeaderboardListStyled>
      {result.map((arrElement, index) => {
        return (
          <LeaderboardListElement
            key={index}
            text={arrElement.text}
            score={arrElement.score}
            index={index}
            disqualified={disqualified}
          />
        );
      })}
    </LeaderboardListStyled>
  );
};

LeaderboardList.propTypes = {
  result: propTypes.array.isRequired,
};
export default LeaderboardList;
