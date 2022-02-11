import PropTypes from 'prop-types';
import PointsTextStyled from './PointsTextStyled';

const PointsText = ({ exerciseResult }) => {
  const pointsString =
    exerciseResult === null ? '-' : String(exerciseResult).replace(/\./g, ',');

  return <PointsTextStyled>{pointsString}</PointsTextStyled>;
};

PointsText.propTypes = {
  exerciseResult: PropTypes.number,
};

export default PointsText;
