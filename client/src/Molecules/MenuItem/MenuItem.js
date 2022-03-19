import propTypes from 'prop-types';

import MenuItemStyled from './MenuItemStyled';
import NavLinkStyled from '../../Atoms/NavLinkStyled/NavLinkStyled';

const MenuItem = ({ text, linkTo, icon, stylefor }) => {
  return (
    <MenuItemStyled>
      <NavLinkStyled to={linkTo} stylefor={stylefor}>
        {icon}
        {text}
      </NavLinkStyled>
    </MenuItemStyled>
  );
};
MenuItem.propTypes = {
  text: propTypes.string,
  linkTo: propTypes.string,
  icon: propTypes.object,
  stylefor: propTypes.string,
};

export default MenuItem;
