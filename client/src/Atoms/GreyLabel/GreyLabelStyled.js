import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';
import { device } from '../../Consts/devices';

const GreyLabelStyled = styled.div`
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
    grid-area: 2 / 1 / 3 / 4;
    height: 85px;
  }
`;

export default GreyLabelStyled;
