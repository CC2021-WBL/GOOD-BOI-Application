import styled from 'styled-components';

const NavCornerMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 5rem;
  width: 100%;
  background: ${({ theme }) => theme.grey00};
  transition: all 0.2s ease-in-out;
  transform-origin: 0 0;
  &.close {
    transform: scale(1, 0);
  }
  &.open {
    transform: scale(1, 1);
  }
`;
export default NavCornerMenuWrapper;
