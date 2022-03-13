import styled from 'styled-components';

const BackgroundDiv = styled.div`
  /* display: none; */

  @media only screen and (min-width: 800px) {
    /* position: absolute; */
    /* display: grid;
    grid-area: 1 / 1 / -1 / -1; */
    background-image: url(${require(`../../Assets/desktop-hero-homePage.png`)});
    /* background-size: cover; */
    background-repeat: no-repeat;
    /* background-position: 100% 50%; */
    background-position: 100% -0%;
    /* background-color: red; */
    /* height: 100vh; */
    height: 100%;
    width: 100%;
    overflow: hidden;
    /* z-index: -1; */
    /* right: 0; */
    margin: auto;
  }
`;
export default BackgroundDiv;
