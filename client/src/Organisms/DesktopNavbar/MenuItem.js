import MenuItemStyled from './MenuItemStyled';
import NavLinkStyled from './NavLinkStyled';
import propTypes from 'prop-types';

const MenuItem = (props) => {
  const { text, linkTo, icon, stylefor, notalink } = props;

  return (
    <MenuItemStyled>
      <NavLinkStyled notalink={notalink} to={linkTo} stylefor={stylefor}>
        {icon}
        {text}
      </NavLinkStyled>
    </MenuItemStyled>
  );
};
MenuItem.propTypes = {
  notalink: propTypes.bool,
};

export default MenuItem;
