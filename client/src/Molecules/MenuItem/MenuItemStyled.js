import styled from 'styled-components';

const MenuItemStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-items: space-between;
  gap: 1rem;
  height: 3rem;
  padding: 0 0 0 0rem;
  color: ${({ theme }) => theme.grey400};
  &:hover {
    cursor: pointer;
    background-color: rgba(230, 230, 230, 0.5);
  }
`;
export default MenuItemStyled;
