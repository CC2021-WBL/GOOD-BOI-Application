import MenuItemStyled from './MenuItemStyled';
import NavLinkStyled from './../NavLinkStyled';

const MenuItem = (props) => {
  const { text, linkTo, icon, formolecule } = props;

  return (
    <MenuItemStyled>
      <NavLinkStyled to={linkTo} formolecule={formolecule}>
        {icon}
        {text}
      </NavLinkStyled>
    </MenuItemStyled>
  );
};

export default MenuItem;
