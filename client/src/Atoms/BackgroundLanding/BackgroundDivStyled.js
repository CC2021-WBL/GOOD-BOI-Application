import styled from 'styled-components';

import desktopHeroHomePage from '../../Assets/desktopHeroHomePage.png';

const BackgroundDivStyled = styled.div`
  grid-area: 2 / 1 /-2 /-1;
  background: url(${desktopHeroHomePage});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: -10;
`;

export default BackgroundDivStyled;
