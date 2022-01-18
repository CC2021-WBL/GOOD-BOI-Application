import PropTypes from 'prop-types';

import GreyLabelStyled from './GreyLabelStyled';

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
