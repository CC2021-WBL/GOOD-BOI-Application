import propTypes from 'prop-types';
import PointsTextStyled from './PointsTextStyled';
import PropTypes from 'prop-types';

const PointsText = ({ points }) => {
  const pointsString = String(points).replace(/\./g, ',');
  return <PointsTextStyled>{pointsString}</PointsTextStyled>;
};

PointsText.propTypes = {
  points: propTypes.number,
  toggle: PropTypes.bool,
};

export default PointsText;
