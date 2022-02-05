import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

import ContestFilterTogglerStyled from './ContestFilterToggleStyled';
import PropTypes from 'prop-types';

const ContestFilterToggler = ({ onClick, toggle }) => {
  return (
    <ContestFilterTogglerStyled onClick={onClick}>
      <p>TERMIN</p>
      {toggle ? <GoTriangleUp /> : <GoTriangleDown />}
    </ContestFilterTogglerStyled>
  );
};

ContestFilterToggler.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ContestFilterToggler;
