import styled from 'styled-components';
import { COLORS } from '../../Styles/varsStyledComponents';

const GreyLabelContainer = styled.div`
  background: ${COLORS.grey00};
  height: 40px;
  font-family: Mulish;
  display: flex;
  justify-content: center;
  align-items: center;

  .greyLabelText {
    font-size: 16px;
    color: ${COLORS.grey800};
  }
`;

export default GreyLabelContainer;
