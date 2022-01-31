// import GreyLabelPath from './GreyLabelPath';

import GreyLabelStyled from './GreyLabelStyled';
import PropTypes from 'prop-types';

const GreyLabel = ({ text }) => {
  return (
    <GreyLabelStyled>
      <p className="greyLabelText">{text}</p>
    </GreyLabelStyled>
  );
};

GreyLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GreyLabel;
