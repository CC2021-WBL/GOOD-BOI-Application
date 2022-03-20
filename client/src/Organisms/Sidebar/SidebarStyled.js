import styled from 'styled-components';

const SidebarStyled = styled.aside`
  display: none;
  border-top: none;
  border-bottom: none;
  text-align: left;

  @media only screen and (min-width: 800px) {
    display: grid;
    grid-area: 3 / 1 / 4 / 2;
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 2 / 4 / 3;
  }
`;

export default SidebarStyled;
