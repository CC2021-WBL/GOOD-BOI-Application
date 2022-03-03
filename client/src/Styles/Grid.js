import styled from 'styled-components';

import { device } from '../Consts/devices';

const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 77px;

  @media only screen and ${device.tablet}{
    /* grid-template-columns: 1fr 4fr 1fr; */
    grid-template-rows: 195px 3fr 110px;
  }
  @media only screen and ${device.desktop} {
    /* grid-template-columns: 1fr 220px minmax(360px, 1160px) 220px 1fr; */
    grid-template-rows: 195px 3fr 240px;
  } ;
`;

export default Grid;
