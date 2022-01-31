import InfoLabelStyled from './InfoLabelStyled';
import PropTypes from 'prop-types';
import { COLORSMOTIVE as c } from '../../Consts/infoLabelConsts';

const InfoLabel = ({ classInfo, dogInfo, pointOnTimeLine, colorMotive }) => {
  const { dogsAmount, isCompleted } = classInfo || [];
  const { exercisesCompleted, exercisesAmount } = dogInfo || [];

  const exercisesComplete =
    exercisesAmount !== undefined && exercisesCompleted === exercisesAmount;

  if (isCompleted || exercisesComplete) {
    colorMotive = c.GREEN;
  }

  return (
    <InfoLabelStyled colorMotive={colorMotive}>
      {/*CONDITIONAL FOR DATE */}
      {pointOnTimeLine && !dogsAmount && <>{pointOnTimeLine}</>}

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
  pointOnTimeLine: PropTypes.string,
  colorMotive: PropTypes.string,
};

export default InfoLabel;
