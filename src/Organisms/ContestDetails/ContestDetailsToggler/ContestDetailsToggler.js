import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

import ContestDetailsTogglerStyled from './ContestDetailsTogglerStyled';
import PropTypes from 'prop-types';

const ContestDetailsToggler = ({ onClick, toggle }) => {
  return (
    <ContestDetailsTogglerStyled onClick={onClick}>
      <p>SZCZEGÓŁY KONKURSU</p>
      {toggle ? <GoTriangleUp /> : <GoTriangleDown />}
    </ContestDetailsTogglerStyled>
  );
};

ContestDetailsToggler.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ContestDetailsToggler;
