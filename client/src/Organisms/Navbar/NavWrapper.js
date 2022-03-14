import styled from 'styled-components';

const NavWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;

  @media only screen and (min-width: 800px) {
    display: block;
    background: ${({ theme }) => theme.grey00};
  }
  @media only screen and (min-width: 1600px) {
    display: block;
    background: ${({ theme }) => theme.grey00};
  }
`;

export default NavWrapper;
