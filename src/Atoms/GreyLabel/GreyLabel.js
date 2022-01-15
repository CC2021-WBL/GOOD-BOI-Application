// import styled from 'styled-components';
import PropTypes from 'prop-types';

const GreyLabel = (props) => {
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  );
};

GreyLabel.propTypes = {
  text: PropTypes.string,
};

export default GreyLabel;
