import propTypes from 'prop-types';
import LeaderboardListElement from './LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';

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
