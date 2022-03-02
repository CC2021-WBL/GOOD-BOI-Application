import styled from 'styled-components';

import { device } from '../Consts/devices';

const Grid = styled.div`
  display: grid;
  height: 100vh;
  /* background-color: lightblue; */
  grid-template-columns: 1fr;
  grid-template-rows: 60px 40px 1fr 77px;

  @media only screen and (${device.tablet}) {
    /* background-color: lightblue; */
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 110px 85px 3fr 120px;
  }
  @media only screen and (${device.desktop}) {
    grid-template-rows: 110px 85px 3fr 240px;
  } ;
`;

export default Grid;
