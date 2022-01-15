import PropTypes from 'prop-types';
import InfoLabelStyled from './InfoLabelStyled';

const InfoLabel = ({ classInfo, dogInfo }) => {
  const { contestantsAmount, isCompleted } = classInfo || [];
  const { exercisesCompleted, exercisesAmount } = dogInfo || [];

  const exercisesComplete =
    exercisesAmount !== undefined && exercisesCompleted === exercisesAmount;

  return (
    <InfoLabelStyled
      isClassCompleted={isCompleted}
      areExercisesCompleted={exercisesComplete}
    >
      {classInfo !== undefined && isCompleted && <>ukończono</>}
      {classInfo !== undefined && !isCompleted && (
        <>
          {contestantsAmount}
          {contestantsAmount === 1 ? ` uczestnik` : ` uczestników`}
        </>
      )}
      {dogInfo !== undefined && (
        <>
          {exercisesCompleted}/{exercisesAmount} ćwiczeń
        </>
      )}
    </InfoLabelStyled>
  );
};

InfoLabel.propTypes = {
  classInfo: PropTypes.object,
  dogInfo: PropTypes.object,
};

export default InfoLabel;
