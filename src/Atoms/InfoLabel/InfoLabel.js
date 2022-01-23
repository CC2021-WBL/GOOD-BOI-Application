import PropTypes from 'prop-types';
import InfoLabelStyled from './InfoLabelStyled';

const InfoLabel = ({ classInfo, dogInfo, dateOfContest = '' }) => {
  const { dogsAmount, isCompleted } = classInfo || [];
  const { exercisesCompleted, exercisesAmount } = dogInfo || [];

  const exercisesComplete =
    exercisesAmount !== undefined && exercisesCompleted === exercisesAmount;

  const todayDate = new Date();
  let date;
  let dateTextInfo;

  if (dateOfContest) {
    date = dateOfContest.toISOString().substring(0, 10);
  } else {
    date = '';
  }

  Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    return this;
  };
  Date.prototype.subtractMinutes = function (min) {
    this.setTime(this.getTime() - min * 60 * 1000);
    return this;
  };

  if (!dateOfContest) {
    dateTextInfo = '';
  } else if (dateOfContest < todayDate.subtractMinutes(15)) {
    dateTextInfo = 'in-past';
  } else if (
    todayDate > dateOfContest.subtractMinutes(15) &&
    todayDate < dateOfContest.addHours(5)
  ) {
    dateTextInfo = 'in-progress';
  } else if (dateOfContest > todayDate) {
    dateTextInfo = 'in-future';
  }

  return (
    <InfoLabelStyled
      isClassCompleted={isCompleted}
      areExercisesCompleted={exercisesComplete}
      dateTextInfo={dateTextInfo}
    >
      {/*CONDITIONAL FOR DATE */}
      {dateTextInfo === 'in-past' && <>archiwalny</>}
      {dateTextInfo === 'in-progress' && <>w trakcie</>}
      {dateTextInfo === 'in-future' && <>nadchodzący</>}

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
  dateOfContest: PropTypes.instanceOf(Date),
};

export default InfoLabel;
