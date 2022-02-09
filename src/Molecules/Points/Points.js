import PropTypes from 'prop-types';
import PointsText from '../../Atoms/PointsText/PointsText';
import PointsInput from '../PointsForm/PointsForm';
import PointsStyled from './PointsStyled';

const Points = ({ exerciseInfo, toggle, onChange }) => {
  const { codeName, result } = exerciseInfo;
  return (
    <PointsStyled>
      {toggle ? (
        <PointsText exerciseResult={result}></PointsText>
      ) : (
        <PointsInput
          exerciseResult={result}
          codeName={codeName}
          onChange={onChange}
        />
      )}
    </PointsStyled>
  );
};

Points.propTypes = {
  exerciseInfo: PropTypes.object,
  toggle: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Points;
