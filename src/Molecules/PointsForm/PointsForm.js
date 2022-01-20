import PropTypes from 'prop-types';
import PointsInputStyled from './PointsInputStyled';
import PointsFormStyled from './PoinstFormStyled';

const PointsForm = ({ points, codeName, onChange }) => {
  return (
    <PointsFormStyled>
      <PointsInputStyled
        type="number"
        inputmode="decimal"
        id={codeName}
        className="points_input"
        defaultValue={points}
        min="0"
        step="0.5"
        max="10"
        onChange={onChange}
      />
    </PointsFormStyled>
  );
};

PointsForm.propTypes = {
  points: PropTypes.number,
  codeName: PropTypes.string,
  onChange: PropTypes.func,
};

export default PointsForm;
