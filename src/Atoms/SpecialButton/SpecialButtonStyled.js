import styled from 'styled-components';

const getStyles = (bgColor, color) => {
  return `background:${bgColor}; color:${color}`;
};
const handleColorType = (props) => {
  switch (props.colors) {
    case 'red':
      return getStyles(
        `${props.theme.negative100}`,
        `${props.theme.negative400}`,
      );
    case 'yellow':
      return getStyles(
        `${props.theme.warning100}`,
        `${props.theme.warning600}`,
      );
    case 'blue':
      return getStyles(
        `${props.theme.primary101}`,
        `${props.theme.primary801}`,
      );
    case 'green':
      return getStyles(
        `${props.theme.positive200}`,
        `${props.theme.positive600}`,
      );
    default:
      return getStyles(`${props.theme.white}`, `${props.theme.grey800}`);
  }
};
const SpecialButtonStyled = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  border-radius: ${(props) => props.left && '0 0 0 0.75rem'};
  border-radius: ${(props) => props.right && '0 0 0.75rem 0'};
  cursor: pointer;
  font-weight: bold;
  ${(props) => handleColorType(props)};
  &:hover {
    filter: brightness(1.1);
  }
`;
export default SpecialButtonStyled;
