import styled from 'styled-components';

const NavButtonWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  align-items: center;
  padding: 0 1rem;
  background: ${({ theme }) => theme.grey00};
`;
export default NavButtonWrapper;
