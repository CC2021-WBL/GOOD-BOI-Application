import GreyLabelPath from './GreyLabelPath';
import GreyLabelStyled from './GreyLabelStyled';
import PropTypes from 'prop-types';

const GreyLabel = () => {
  return <GreyLabelStyled>{GreyLabelPath()}</GreyLabelStyled>;
};

GreyLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GreyLabel;
