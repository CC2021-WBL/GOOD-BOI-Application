import styled from 'styled-components';

const NavCornerMenuWrapper = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  background: ${({ theme }) => theme.grey00};
  transform-origin: 0 0;
  transition: all 0.2s ease-in-out;
  &.close {
    transform: scale(1, 0);
  }
  &.open {
    transform: scale(1, 1);
  }
`;
export default NavCornerMenuWrapper;
