import propTypes from 'prop-types';

import MenuItemStyled from './MenuItemStyled';
import NavLinkStyled from '../../Atoms/NavLinkStyled/NavLinkStyled';

const MenuItem = ({ text, linkTo, icon, stylefor, state, id }) => {
  return (
    <MenuItemStyled>
      <NavLinkStyled to={linkTo} stylefor={stylefor} state={state} id={id}>
        {icon}
        {text}
      </NavLinkStyled>
    </MenuItemStyled>
  );
};
MenuItem.propTypes = {
  text: propTypes.string.isRequired,
  linkTo: propTypes.string,
  icon: propTypes.object,
  stylefor: propTypes.string,
  state: propTypes.object,
};

export default MenuItem;
