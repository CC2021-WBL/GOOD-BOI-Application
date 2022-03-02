import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';
import { device } from '../../Consts/devices';

const GreyLabelStyled = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.grey00};

  .greyLabelText {
    color: ${({ theme }) => theme.grey800};
    ${FONTS.body_semibold};
  }

  @media only screen and (${device.tablet}) {
    height: 85px;
    grid-area: 2 / 1 / 3 / -1;
    background: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.grey200};
    .greyLabelText {
    }
  }
`;

export default GreyLabelStyled;
