import styled from 'styled-components';

const NavInnerStyled = styled.div`
  display: none;

  @media only screen and (min-width: 800px) {
    // devices with min-width > 800
    height: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 0rem 2rem 0rem 4.5rem;
    background: ${({ theme }) => theme.grey00};
  }
`;

export default NavInnerStyled;
