import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

import ContestFilterTogglerStyled from './ContestFilterToggleStyled';
import PropTypes from 'prop-types';
import useMediaQuery from '../../Hooks/useMediaQuery';

const ContestFilterToggler = ({ onClick, toggle }) => {
  return (
    <ContestFilterTogglerStyled onClick={onClick}>
      {useMediaQuery('(min-width:800px)') && !toggle ? null : toggle ? (
        <GoTriangleUp />
      ) : (
        <GoTriangleDown />
      )}
      <p>TERMIN</p>
    </ContestFilterTogglerStyled>
  );
};

ContestFilterToggler.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ContestFilterToggler;
