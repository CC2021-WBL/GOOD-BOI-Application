import styled from 'styled-components';

import { device } from '../Consts/device';

const AppStyled = styled.div`
  @media ${device.laptopL} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 12.5%);
    gap: 0px;
    width: 100vw;
    height: 100vh;
  }

  @media ${device.mobileL} {
    display: grid;
    grid-template-columns: none;
    /* grid-template-rows: 60px 40px 1fr; */
    grid-template-rows: none;
    gap: 0px;
    width: 100vw;
    height: 100vh;
  }
`;

export default AppStyled;
