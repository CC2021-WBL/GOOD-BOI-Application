import styled from 'styled-components';
import { Link } from 'react-router-dom';

import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const handleBgAndColor = (props) => {
  if (props.primary) {
    return `color: ${COLORS.white}; background: ${COLORS.primary501};`;
  }
  if (props.secondary) {
    return `color: ${COLORS.primary601}; background: ${COLORS.primary201};`;
  }
  if (props.ternary) {
    return `color: ${COLORS.grey800}; background: transparent;`;
  }
};

const borderHandler = (props) => {
  if (props.primary) {
    return `border: 0.5px solid ${COLORS.grey800};`;
  }
  if (props.secondary) {
    return `border: 0.5px solid ${COLORS.primary601};`;
  }
  if (props.ternary) {
    return `border: 0.5px solid ${COLORS.grey800};`;
  }
};
const FakeButtonStyled = styled(Link)`
  display: flex;
  width: 100%;
  height: 3.25rem;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
  border-radius: 0.75rem;
  ${FONTS.button};
  ${(props) => handleBgAndColor(props)};
  ${(props) => borderHandler(props)};
`;

export default FakeButtonStyled;
