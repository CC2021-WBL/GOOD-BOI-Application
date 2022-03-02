import styled from 'styled-components';

import { device } from '../Consts/devices';

const Grid = styled.div`
  @media only screen and (${device.tablet}) {
    display: grid;
    height: 100vh;
    /* background-color: lightgrey; */
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 110px 85px 3fr 120px;
  }
  @media only screen and (${device.desktop}) {
    grid-template-rows: 110px 85px 3fr 240px;
  } ;
`;

export default Grid;
