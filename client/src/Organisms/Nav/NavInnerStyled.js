import styled from 'styled-components';

const NavInnerStyled = styled.div`
  display: none;
  color: ${({ theme }) => theme.grey800};

  @media only screen and (min-width: 800px) {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 2rem;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1620px;
    padding: 0rem 2rem;
  }
`;

export default NavInnerStyled;
