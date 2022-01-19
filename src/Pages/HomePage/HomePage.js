import { Outlet, Link } from 'react-router-dom';
import NavElement from '../../Organisms/NavElement/NavElement';
const HomePage = () => {
  return (
    <>
      <NavElement text="Strona główna" />
      <h1>I am a HOME Page Component</h1>
      <Link to="/landing">Landing page--|</Link>
      <Link to="/login">Login--|</Link>
      <Link to="/profile">--Profile--|</Link>
      <Link to="/role">--Role--|</Link>
      <Link to="/role/contests">--Contests--|</Link>
      <Link to="/role/contests/1">--Single contest--|</Link>
      <Link to="role/contests/1/classes">--Classes page--|</Link>
      <Link to="role/contests/1/classes/1">--Single class list |</Link>
      <Link to="role/contests/1/classes/1/woof">--Woofs exercises |</Link>
      <Link to="role/contests/1/classes/1/woof/dogSummary">
        --Woofs summary |
      </Link>
      <Link to="role/contests/1/classes/1/classSummary">--Class summary</Link>
      <Outlet />
    </>
  );
};

export default HomePage;
