import styled from 'styled-components';

const NavCornerMenuStyled = styled.div`
  width: 100%;
  text-align: left;
  &.close {
    transform: scale(1, 0);
  }
  &.open {
    transform: scale(1, 1);
  }
`;

export default NavCornerMenuStyled;
