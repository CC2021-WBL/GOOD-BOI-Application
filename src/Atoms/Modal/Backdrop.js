import propTypes from 'prop-types';

import BackdropStyled from './BackdropStyled';

const Backdrop = ({ onClick }) => <BackdropStyled onClick={onClick} />;

Backdrop.propTypes = {
  onClick: propTypes.func,
};

export default Backdrop;
