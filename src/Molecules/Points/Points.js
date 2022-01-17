import propTypes from 'prop-types';
import PropTypes from 'prop-types';
import PointsText from '../../Atoms/PointsText/PointsText';
import PointsInput from '../PointsForm/PointsForm';
import PointsStyled from './PointsStyled';

const Points = ({ points, toggle }) => {
  return (
    <PointsStyled>
      {toggle ? (
        <PointsText points={points}></PointsText>
      ) : (
        <PointsInput points={points} />
      )}
    </PointsStyled>
  );
};

Points.propTypes = {
  points: propTypes.number,
  toggle: PropTypes.bool,
};

export default Points;
