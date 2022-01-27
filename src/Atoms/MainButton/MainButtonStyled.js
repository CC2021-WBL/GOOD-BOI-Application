import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

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
const MainButtonStyled = styled.button`
  display: flex;
  width: 100%;
  height: 3.25rem;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0 0.5rem 0;
  border-radius: 0.75rem;
  ${FONTS.button};
  ${(props) => handleBgAndColor(props)};
  ${(props) => borderHandler(props)};
`;

// primary color: white ; background: #2f80ed (niebieskie ciemniejszy)
// secondary color: #1264D1 (ciemnoniebieski); background: #ACCCF8 (jasnoniebieski)
// trinary color: #323F4B ; background: transparent
// primary601: '#1264D1', ${COLORS.primary601}
// primary501: '#2F80ED', ${COLORS.primary501}
// primary201: '#ACCCF8', ${COLORS.primary201}
// grey800: '#323F4B', ${COLORS.grey800}

export default MainButtonStyled;
