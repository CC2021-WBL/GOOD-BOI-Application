import styled from 'styled-components';

import desktopHeroHomePage from '../../Assets/desktopHeroHomePage.png';

const BackgroundDivStyled = styled.div`
  z-index: -10;
  width: 100%;
  height: 100%;
  background: url(${desktopHeroHomePage});
  background-repeat: no-repeat;
  background-size: contain;
  grid-area: 2 / 1 /-2 /-1;
`;

export default BackgroundDivStyled;
