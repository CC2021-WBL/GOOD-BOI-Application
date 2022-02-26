import NavMenuSelectFieldStyled from './NavMenuSelectFieldStyled';

const NavMenuSelectField = () => {
  return (
    <NavMenuSelectFieldStyled>
      <div className="profilePicture"></div>
      <div>Witaj, Matylda</div>
      <select>
        <option>Ustawienia</option>
        <option>Wyloguj</option>
      </select>
    </NavMenuSelectFieldStyled>
  );
};

export default NavMenuSelectField;
