import styled from 'styled-components';

const MenuItemStyled = styled.div`
  position: relative;
  display: flex;
  height: 3rem;
  align-items: center;
  padding: 0;
  ${(props) => props.stylefor === 'Cornermenu' && 'padding-left: .5rem'};
  color: ${({ theme }) => theme.grey400};
  gap: 1rem;
  justify-items: space-between;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.grey100};
    cursor: pointer;
  }
`;
export default MenuItemStyled;
