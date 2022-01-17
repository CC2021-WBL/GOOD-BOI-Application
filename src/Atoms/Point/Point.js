import propTypes from 'prop-types';
import PointStyled from './PointStyled';
import PropTypes from 'prop-types';

const Point = ({ points, toggle }) => {
  return (
    <PointStyled toggle={toggle}>
      {toggle ? points : `input in the future`}
    </PointStyled>
  );
};

Point.propTypes = {
  points: propTypes.number,
  toggle: PropTypes.bool,
};

export default Point;
