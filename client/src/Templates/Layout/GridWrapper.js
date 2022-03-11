import styled from 'styled-components';

import { device } from '../../Consts/devices';

const GridWrapper = styled.div`
  ${(props) => props.mobile && `grid-area:${props.mobile}`};

  @media ${device.tablet} {
    background-color: ${(props) =>
      props.navFoot ? props.theme.grey200 : props.theme.white};
    ${(props) => props.tablet && `grid-area:${props.tablet}`};
  }

  @media ${device.desktop} {
    ${(props) => props.desktop && `grid-area:${props.desktop}`};
  }
`;

export default GridWrapper;
