import styled from 'styled-components';

import { device } from '../Consts/devices';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 16px 0 1fr 0 16px;
  ${(props) => props.mobile && `grid-row:${props.mobile}`};

  @media ${device.tablet} {
    grid-template-columns: minmax(16px, 1fr) 220px minmax(360px, 900px) 220px minmax(16px, 1fr);
    ${(props) => props.tablet && `grid-row:${props.tablet}`};
    background-color: ${({ theme }) => theme.grey200};
  }
  @media ${device.desktop} {
    /* grid-template-columns: minmax(16px, 1fr) 220px minmax(360px, 1000px) 220px minmax(16px, 1fr); */

    ${(props) => props.desktop && `grid-row:${props.desktop}`};
  }


`;

export default GridWrapper;
