import styled from 'styled-components';

const NavButtonWrapper = styled.div`
  height: 61px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background: ${({ theme }) => theme.grey00};
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
export default NavButtonWrapper;
