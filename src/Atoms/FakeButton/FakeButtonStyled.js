import styled from 'styled-components';
import { Link } from 'react-router-dom';

import FONTS from '../../Styles/fontsStyledComponents';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const handleBgAndColor = (props) => {
  if (props.primary) {
    return `color: ${props.theme.white}; background: ${props.theme.primary501};`;
  }
  if (props.secondary) {
    return `color: ${props.theme.primary601}; background: ${props.theme.primary201};`;
  }
  if (props.ternary) {
    return `color: ${props.theme.grey800}; background: ${props.theme.white};`;
  }
};

const borderHandler = (props) => {
  if (props.primary) {
    return `border: 0.5px solid ${props.theme.grey800}`;
  }
  if (props.secondary) {
    return `border: 0.5px solid ${props.theme.primary601};`;
  }
  if (props.ternary) {
    return `border: 0.5px solid ${props.theme.grey800}`;
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
