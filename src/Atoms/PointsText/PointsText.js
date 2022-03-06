import PropTypes from 'prop-types';
import PointsTextStyled from './PointsTextStyled';

const PointsText = ({ points }) => {
  const pointsString = String(points).replace(/\./g, ',');
  return <PointsTextStyled>{pointsString}</PointsTextStyled>;
};

PointsText.propTypes = {
  points: PropTypes.number,
};

export default PointsText;
