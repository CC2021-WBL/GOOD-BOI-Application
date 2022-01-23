import PropTypes from 'prop-types';
import InfoLabelStyled from './InfoLabelStyled';
import { TIME } from '../../Consts/infoLabelConsts';

const InfoLabel = ({
  classInfo,
  dogInfo,
  startDateOfContest = '',
  endDateOfContest = '',
}) => {
  const { dogsAmount, isCompleted } = classInfo || [];
  const { exercisesCompleted, exercisesAmount } = dogInfo || [];

  const exercisesComplete =
    exercisesAmount !== undefined && exercisesCompleted === exercisesAmount;

  const todayDate = new Date();
  let dateTextInfo;

  if (!startDateOfContest) {
    dateTextInfo = '';
  } else if (endDateOfContest < todayDate) {
    dateTextInfo = TIME.PAST;
  } else if (todayDate >= startDateOfContest && todayDate <= endDateOfContest) {
    dateTextInfo = TIME.PRESENT;
  } else if (startDateOfContest > todayDate) {
    dateTextInfo = TIME.FUTURE;
  }

  return (
    <InfoLabelStyled
      isClassCompleted={isCompleted}
      areExercisesCompleted={exercisesComplete}
      dateTextInfo={dateTextInfo}
      dogsAmount={dogsAmount}
    >
      {/*CONDITIONAL FOR DATE */}
      {dateTextInfo && !dogsAmount && <>{dateTextInfo}</>}

      {/*CONDITIONAL FOR CLASSES */}
      {classInfo && isCompleted && <>ukończono</>}
      {classInfo && !isCompleted && (
        <>
          {dogsAmount}
          {dogsAmount === 1 ? ` uczestnik` : ` uczestników`}
        </>
      )}

      {/*CONDITIONAL FOR DOGS */}
      {dogInfo && (
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
  startDateOfContest: PropTypes.instanceOf(Date),
  endDateOfContest: PropTypes.instanceOf(Date),
};

export default InfoLabel;
