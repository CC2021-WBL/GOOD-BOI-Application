import PropTypes from 'prop-types';

import GreyLabelStyled from './GreyLabelStyled';

// import GridWrapper from '../../Styles/GridWrapper';

const GreyLabel = ({ text }) => {
  return (
    // <GridWrapper
    //   as={'labelGrid'}
    //   mobile="2 / 1 / 3 / 2"
    //   tablet="2 / 1 / 3 / -1"
    // >
    <GreyLabelStyled>
      <p className="greyLabelText">{text}</p>
    </GreyLabelStyled>
  );
};

GreyLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GreyLabel;
