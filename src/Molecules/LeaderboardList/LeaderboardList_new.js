import LeaderboardListElement from './../../Atoms/Leaderboard/LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';
import calculateExerciseScore from '../../Tools/calculateExerciseScore';
import propTypes from 'prop-types';
import translateExerciseCode2string from './../../Tools/translateExerciseCode2string';

const LeaderboardList_new = ({ classId, dogName }) => {
  localStorage.getItem('performanceObject');
  const retrievedObject = localStorage.getItem('performanceObject');
  const retrivedPerformanceObject = JSON.parse(retrievedObject);
  console.log('retrievedObject: ', JSON.parse(retrievedObject));
  console.log('dogName');
  console.log('dogname ' + dogName);
  const exercisesList = retrivedPerformanceObject.exercises;
  const dogSummaryResult = exercisesList.map((elem) => {
    return {
      text: translateExerciseCode2string(classId, elem.codeName),
      score: calculateExerciseScore(classId, elem.codeName) * elem.result,
    };
  });
  return (
    <LeaderboardListStyled>
      {dogSummaryResult.map((arrElement, index) => {
        return (
          <LeaderboardListElement
            key={index}
            text={arrElement.text}
            score={arrElement.score}
            index={index}
            // disqualified={disqualified}
          />
        );
      })}
    </LeaderboardListStyled>
  );
};

LeaderboardList_new.propTypes = {
  contestId: propTypes.string,
  classId: propTypes.string,
  dogName: propTypes.string,
  performanceObject: propTypes.object,
};
export default LeaderboardList_new;
