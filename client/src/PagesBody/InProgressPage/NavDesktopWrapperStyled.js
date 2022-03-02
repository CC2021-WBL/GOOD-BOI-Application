import styled from 'styled-components';

const NavDesktopWrapperStyled = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  /* display: flex;
  flex-direction: row;
  justify-content: space-around; */
  /* height: 109px; */
  /* margin: auto; */

  align-content: center;
  align-items: center;
  background: ${({ theme }) => theme.grey00};
  color: ${({ theme }) => theme.grey400};
  text-decoration: none;

  &.isActive {
    color: ${({ theme }) => theme.primary400};
    font-weight: bold;
    text-decoration: none;
  }
`;

export default NavDesktopWrapperStyled;
