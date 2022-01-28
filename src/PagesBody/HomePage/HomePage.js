import { Outlet } from 'react-router-dom';
import LinkStyled from './LinkStyled';

const HomePage = () => {
  return (
    <>
      <LinkStyled to="/">Landing page</LinkStyled>
      <LinkStyled to="/login">Login</LinkStyled>
      <LinkStyled to="register">Register</LinkStyled>
      <LinkStyled to="/contests">Contests</LinkStyled>
      <LinkStyled to="/contests/1">Single</LinkStyled>
      <LinkStyled to="/contests/1/classes">Classes page</LinkStyled>
      <LinkStyled to="/contests/1/classes/1">Single class list</LinkStyled>
      <LinkStyled to="/contests/1/classes/1/woof">Woofs exercises</LinkStyled>
      <LinkStyled to="/contests/1/classes/1/woof/summary">Woofs results</LinkStyled>
      <LinkStyled to="/contestDetails/">contestDetails</LinkStyled>
      <Outlet />
    </>
  );
};

export default HomePage;
