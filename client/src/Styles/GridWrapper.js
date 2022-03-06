import { device } from '../Consts/devices';
import styled from 'styled-components';

const GridWrapper = styled.div`
  ${(props) => props.mobile && `grid-area:${props.mobile}`};

  @media ${device.tablet} {
    ${(props) => props.tablet && `grid-area:${props.tablet}`};
    background-color: ${(props) =>
      props.navFoot ? props.theme.grey00 : props.theme.white};
  }

  @media ${device.desktop} {
    ${(props) => props.desktop && `grid-area:${props.desktop}`};
  }
`;

export default GridWrapper;
