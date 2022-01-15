// import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const BlueLabel = (props) => {
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  );
};

BlueLabel.propTypes = {
  text: PropTypes.string,
};

export default BlueLabel;
