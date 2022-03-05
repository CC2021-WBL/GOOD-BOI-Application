import FONTS from '../../Styles/fontsStyledComponents';
import { device } from './../../Consts/devices';
import styled from 'styled-components';

const GreyLabelStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.grey00};
  height: 100%; //

  .greyLabelText {
    color: ${({ theme }) => theme.grey800};
    ${FONTS.body_semibold};
  }
  @media only screen and (${device.desktop}) {
    display: grid;
    grid-template-columns: 1fr 220px minmax(360px, 1160px) 220px 1fr;
    justify-content: start;
    background: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.grey200};
    .greyLabelText {
      grid-area: 2 / 2 / 5 / 3;
      font-size: 1.25rem;
    }
  }
`;

export default GreyLabelStyled;
