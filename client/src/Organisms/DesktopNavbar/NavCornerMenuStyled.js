import styled from 'styled-components';

const NavCornerMenuStyled = styled.div`
  text-align: left;
  width: 100%;
  background: ${({ theme }) => theme.grey00};
  &.close {
    transform: scale(1, 0);
  }
  &.open {
    transform: scale(1, 1);
  }
`;

export default NavCornerMenuStyled;
