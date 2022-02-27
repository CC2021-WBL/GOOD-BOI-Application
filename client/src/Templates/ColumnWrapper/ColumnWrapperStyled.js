import styled from 'styled-components';
import { device } from '../../Tools/device';

const ColumnWrapperStyled = styled.div`
  background-color: grey;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${(props) =>
    props.paddingLeftRight &&
    `0 ${props.paddingLeftRight}rem 0 0${props.paddingLeftRight}rem`};
  padding-top: ${(props) => props.paddingTop && `${props.paddingTop}rem`};
  padding-bottom: ${(props) =>
    props.paddingBottom && `${props.paddingBottom}rem`};

  @media ${device.desktopL} {
    ${(props) => props.desktop && `${props.desktop}`};
    //grid-area: 2 / 4 / 8 / 10;
  }

  @media ${device.mobileL} {
    ${(props) => props.mobile && `${props.mobile}`};
  }
`;

export default ColumnWrapperStyled;
