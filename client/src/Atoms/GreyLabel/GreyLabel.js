import PropTypes from 'prop-types';

import GreyLabelStyled from './GreyLabelStyled';

const GreyLabel = ({ text }) => {
  return (
    <GreyLabelStyled>
      <div className="greyLabelText">{text}</div>
    </GreyLabelStyled>
  );
};

GreyLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GreyLabel;
