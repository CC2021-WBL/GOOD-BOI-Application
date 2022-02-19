import PropTypes from 'prop-types';
import PointsInputStyled from './PointsInputStyled';
import PointsFormStyled from './PoinstFormStyled';

const PointsForm = ({ exerciseResult, codeName, onChange }) => {
  return (
    <PointsFormStyled>
      <PointsInputStyled
        type="number"
        id={codeName}
        className="points_input"
        defaultValue={exerciseResult}
        min="0"
        step="0.5"
        max="10"
        onChange={onChange}
      />
    </PointsFormStyled>
  );
};

PointsForm.propTypes = {
  exerciseResult: PropTypes.number,
  codeName: PropTypes.string,
  onChange: PropTypes.func,
};

export default PointsForm;
