import PropTypes from 'prop-types';
import InfoLabelStyled from './InfoLabelStyled';

const PAST = 'archiwalny';
const PRESENT = 'w trakcie';
const FUTURE = 'nadchodzący';

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
    dateTextInfo = PAST;
  } else if (
    todayDate > startDateOfContest.subtractMinutes(15) &&
    todayDate < startDateOfContest.addHours(5)
  ) {
    dateTextInfo = PRESENT;
  } else if (startDateOfContest > todayDate) {
    dateTextInfo = FUTURE;
  }

  return (
    <InfoLabelStyled
      isClassCompleted={isCompleted}
      areExercisesCompleted={exercisesComplete}
      dateTextInfo={dateTextInfo}
    >
      {/*CONDITIONAL FOR DATE */}
      {dateTextInfo === PAST && <>{PAST}</>}
      {dateTextInfo === PRESENT && <>{PRESENT}</>}
      {dateTextInfo === FUTURE && <>{FUTURE}</>}

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
