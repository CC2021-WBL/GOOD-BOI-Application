import propTypes from 'prop-types';

import LeaderboardListStyled from './LeaderboardListStyled';
import LeaderboardListElement from './../../Atoms/Leaderboard/LeaderboardListElement';

const LeaderboardList = ({ result }) => {
  return (
    <LeaderboardListStyled>
      {result.map((elementTablicy, index) => {
        return (
          <LeaderboardListElement
            key={index}
            text={elementTablicy.text}
            score={elementTablicy.score}
            index={index}
          />
        );
      })}
    </LeaderboardListStyled>
  );
};

LeaderboardList.propTypes = {
  result: propTypes.array,
};
export default LeaderboardList;
