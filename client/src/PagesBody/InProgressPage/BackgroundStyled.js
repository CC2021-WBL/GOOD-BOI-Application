import { device } from '../../Consts/devices';
import styled from 'styled-components';

const BackgroundStyled = styled.div`
  position: absolute;
  background-image: url(${require(`../../Assets/GoogBoi-heroGraphic.png`)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100% 50%;
  /* height: 100vh;
  width: 100%; */
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
  right: 0;
  margin: auto;
  display: none;

  @media only screen and (${device.tablet}) {
    display: grid;
    grid-area: 3 / 2 / 4 / 3;
  }
  @media only screen and (${device.desktop}) {
    grid-area: 3 / 2 / 4 / 3;
  }
`;

export default BackgroundStyled;
