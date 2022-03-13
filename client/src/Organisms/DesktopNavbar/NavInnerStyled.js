import styled from 'styled-components';

const NavInnerStyled = styled.div`
  display: none;

  @media only screen and (min-width: 800px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 11.5rem 0rem 4.5rem;
    background: ${({ theme }) => theme.grey00};
    border: 5px dotted tomato;
  }
`;

export default NavInnerStyled;
