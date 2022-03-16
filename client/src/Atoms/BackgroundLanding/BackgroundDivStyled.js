import styled from 'styled-components';

import desktopHeroHomePage from '../../Assets/desktopHeroHomePage.png';

const BackgroundDivStyled = styled.div`
  z-index: -10;
  background: url(${desktopHeroHomePage});
  background-position: top right;
  background-repeat: no-repeat;
  background-size: contain;
  grid-area: 1 / 1 /-2 /-1;

  @media only screen and (min-width: 800px) {
    grid-area: 2 / 1 /-2 /-1;
  }
  @media only screen and (min-width: 1921px) {
    display: none;
  }
`;

export default BackgroundDivStyled;
