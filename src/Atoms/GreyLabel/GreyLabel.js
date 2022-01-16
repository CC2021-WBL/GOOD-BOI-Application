import PropTypes from 'prop-types';
import GreyLabelContainer from './GreyLabelStyled';

const GreyLabel = (props) => {
  return (
    <GreyLabelContainer>
      <p className="greyLabelText">{props.text}</p>
    </GreyLabelContainer>
  );
};

GreyLabel.propTypes = {
  text: PropTypes.string,
};

export default GreyLabel;
