import { device } from '../Consts/devices';
import styled from 'styled-components';

const Grid = styled.div`
  @media only screen and (${device.tablet}) {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 110px 85px 3fr 120px;
  }
  @media only screen and (${device.desktop}) {
    grid-template-rows: 110px 85px 3fr 240px;
  } ;
`;

export default Grid;
