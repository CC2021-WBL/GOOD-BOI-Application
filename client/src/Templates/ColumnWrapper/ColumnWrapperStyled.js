import styled from 'styled-components';

import { device } from '../../Consts/device';

const ColumnWrapperStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${(props) =>
    props.paddingLeftRight &&
    `0 ${props.paddingLeftRight}rem 0 0${props.paddingLeftRight}rem`};
  padding-top: ${(props) => props.paddingTop && `${props.paddingTop}rem`};
  padding-bottom: ${(props) =>
    props.paddingBottom && `${props.paddingBottom}rem`};

  ${(props) =>
    props.className === 'user_profile' &&
    `
    @media only screen and (min-width: 740px) {
      display: grid;
      gap: 20px;
      grid-template-columns: 40% 40% 20%;
      grid-template-rows: repeat(8, 12.5%);
 
  }
  
  `}

  @media ${device.desktopL} {
    ${(props) => props.desktop && `${props.desktop}`};
  }
  @media ${device.mobileL} {
    ${(props) => props.mobile && `${props.mobile}`}
  }
`;

export default ColumnWrapperStyled;
