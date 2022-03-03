import { device } from '../../Consts/devices';
import styled from 'styled-components';

const ColumnWrapperStyled = styled.div`
  display: flex;
  width: 100%;

  border-radius: 12px;
  margin: 0 auto 0 auto; // ?
  /* margin: 0.5rem auto 0.5rem auto; // ? */
  /* margin: auto; */
  flex-direction: column;
  padding: ${(props) =>
    props.paddingLeftRight &&
    `0 ${props.paddingLeftRight}rem 0 0${props.paddingLeftRight}rem`};
  padding-top: ${(props) => props.paddingTop && `${props.paddingTop}rem`};
  padding-bottom: ${(props) =>
    props.paddingBottom && `${props.paddingBottom}rem`};

  @media only screen and (${device.tablet}) {
    grid-area: 3 / 2 / 4 / 3;
    padding: 2rem; //??
    max-width: 430px; // ?
    border: 2px solid ${({ theme }) => theme.grey200}; // ?
  }
  @media only screen and (${device.desktop}) {
    grid-area: 3 / 2 / 4 / 3;
    padding: 2rem; // ?
    max-width: 430px; // ?
    border: 2px solid ${({ theme }) => theme.grey200}; // ?
  }
`;

export default ColumnWrapperStyled;
