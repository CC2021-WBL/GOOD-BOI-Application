import propTypes from 'prop-types';
import PropTypes from 'prop-types';
import PointsInputStyled from './PointsInputStyled';
import PointsFormStyled from './PoinstFormStyled';

const PointsForm = ({ points }) => {
  return (
    <PointsFormStyled>
      <PointsInputStyled
        type="number"
        id="points"
        className="points_input"
        defaultValue={points}
        min="0"
        step="0.5"
        max="10"
      />
    </PointsFormStyled>
  );
};

PointsForm.propTypes = {
  points: propTypes.number,
  toggle: PropTypes.bool,
};

export default PointsForm;
