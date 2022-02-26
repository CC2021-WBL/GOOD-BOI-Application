import styled from 'styled-components';

const NavDesktopWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 109px;
  align-content: center;
  align-items: center;
  background: ${({ theme }) => theme.grey00};
  .isActive {
    color: blue;
    background: red;
  }
  .active {
    color: ${({ theme }) => theme.primary800};
  }
`;

export default NavDesktopWrapperStyled;
