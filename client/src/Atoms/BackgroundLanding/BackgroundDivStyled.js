import styled from 'styled-components';

const BackgroundDivStyled = styled.div`
  z-index: -10;
  background-image: url(${require(`../../Assets/desktopHeroHomePage.png`)});
  background-position: top right;
  background-repeat: no-repeat;
  background-size: contain;
  grid-area: 1 / 1 /-2 /-1;

  &.login-page-background {
    grid-area: 2 / 1 /-2 /-1;
  }

  @media only screen and (min-width: 800px) {
    grid-area: 2 / 1 /-2 /-1;
  }
  @media only screen and (min-width: 1921px) {
    display: none;
  }
`;

export default BackgroundDivStyled;
