import styled from 'styled-components';

const NavInnerStyled = styled.div`
  display: none;

  @media only screen and (min-width: 800px) {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1200px;
    padding: 0rem 2rem;
  }
`;

export default NavInnerStyled;
