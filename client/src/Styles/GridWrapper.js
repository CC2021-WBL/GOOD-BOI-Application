import styled from 'styled-components';

import { device } from '../Consts/devices';

const GridWrapper = styled.div`
  @media ${device.desktop} {
    ${(props) => props.desktop && `grid-area:${props.desktop}`};
  }
  @media ${device.tablet} {
    ${(props) => props.tablet && `grid-area:${props.tablet}`};
    background-color: ${({ theme }) => theme.grey200};
  }

  ${(props) => props.mobile && `grid-area:${props.mobile}`};
`;

export default GridWrapper;
