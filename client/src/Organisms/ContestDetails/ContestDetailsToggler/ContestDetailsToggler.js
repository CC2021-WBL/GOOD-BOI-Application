import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

import ContestDetailsTogglerStyled from './ContestDetailsTogglerStyled';
import PropTypes from 'prop-types';
import useMediaQuery from '../../../Hooks/useMediaQuery';

const ContestDetailsToggler = ({ onClick, toggle }) => {
  return (
    <ContestDetailsTogglerStyled onClick={onClick}>
      <p>SZCZEGÓŁY ZAWODÓW</p>
      {useMediaQuery('(max-width:1024px)') && toggle && <GoTriangleUp />}
      {useMediaQuery('(max-width:1024px)') && !toggle && <GoTriangleDown />}
    </ContestDetailsTogglerStyled>
  );
};

ContestDetailsToggler.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ContestDetailsToggler;
