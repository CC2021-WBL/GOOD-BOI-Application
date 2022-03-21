import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

import ContestDetailsTogglerStyled from './ContestDetailsTogglerStyled';
import PropTypes from 'prop-types';
import useWindowSize from '../../../Hooks/useWindowSize';
import { useEffect, useState } from 'react';

const ContestDetailsToggler = ({ onClick, toggle }) => {
  const [visibilityOfIcon, setVisibilityOfIcon] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    width >= 1024 ? setVisibilityOfIcon(false) : setVisibilityOfIcon(true);
  }, [width]);

  return (
    <ContestDetailsTogglerStyled onClick={onClick}>
      <p>SZCZEGÓŁY ZAWODÓW</p>
      {toggle && visibilityOfIcon && <GoTriangleUp />}
      {!toggle && visibilityOfIcon && <GoTriangleDown />}
    </ContestDetailsTogglerStyled>
  );
};

ContestDetailsToggler.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ContestDetailsToggler;
