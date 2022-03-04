import MenuItemStyled from './MenuItemStyled';
import NavLinkStyled from './NavLinkStyled';
import propTypes from 'prop-types';

const MenuItem = (props) => {
  const { text, linkTo, icon, stylefor } = props;

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
  icon: propTypes.string,
  stylefor: propTypes.string,
};

export default MenuItem;
