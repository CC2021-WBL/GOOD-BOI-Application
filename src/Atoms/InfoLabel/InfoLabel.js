import PropTypes from 'prop-types';
import InfoLabelStyled from './InfoLabelStyled';

const TIME = {
  PAST: 'archiwalny',
  PRESENT: 'w trakcie',
  FUTURE: 'nadchodzący',
  UNKNOWN: 'loading...',
};

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

  console.log(endDateOfContest);
  const todayDate = new Date();
  // let date;
  let dateTextInfo;

  /*   if (startDateOfContest) {
    date = startDateOfContest.toISOString().substring(0, 10);
  } else {
    date = '';
  } */

  Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    return this;
  };
  Date.prototype.subtractMinutes = function (min) {
    this.setTime(this.getTime() - min * 60 * 1000);
    return this;
  };

  if (!startDateOfContest) {
    dateTextInfo = '';
  } else if (startDateOfContest < todayDate.subtractMinutes(15)) {
    dateTextInfo = TIME.PAST;
  } else if (
    todayDate > startDateOfContest.subtractMinutes(15) &&
    todayDate < startDateOfContest.addHours(5)
  ) {
    dateTextInfo = TIME.PRESENT;
  } else if (startDateOfContest > todayDate) {
    dateTextInfo = TIME.FUTURE;
  } else dateTextInfo = TIME.UNKNOWN;

  return (
    <InfoLabelStyled
      isClassCompleted={isCompleted}
      areExercisesCompleted={exercisesComplete}
      dateTextInfo={dateTextInfo}
    >
      {/*CONDITIONAL FOR DATE */}
      {dateTextInfo === TIME.PAST && <>{TIME.PAST}</>}
      {dateTextInfo === TIME.PRESENT && <>{TIME.PRESENT}</>}
      {dateTextInfo === TIME.FUTURE && <>{TIME.FUTURE}</>}
      {dateTextInfo === TIME.UNKNOWN && <>{TIME.UNKNOWN}</>}

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
