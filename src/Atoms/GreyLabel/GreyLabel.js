import PropTypes from 'prop-types';
import GreyLabelContainer from './GreyLabelStyled';

const GreyLabel = (props) => {
  return (
    <GreyLabelContainer>
      <h2 className="greyLabelText">{props.text}</h2>
    </GreyLabelContainer>
  );
};

GreyLabel.propTypes = {
  text: PropTypes.string,
};

export default GreyLabel;
