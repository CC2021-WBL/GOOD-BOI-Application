import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';

const handleColorType = (theme) => {
  switch (theme) {
    case 'red':
      return `background:${COLORS.negative100}; color:${COLORS.negative400}`;
    case 'yellow':
      return `background:${COLORS.warning100}; color:${COLORS.warning600}`;
    case 'blue':
      return `background:${COLORS.primary101}; color:${COLORS.primary801}`;
    case 'green':
      return `background:${COLORS.positive200}; color:${COLORS.positive600}`;
    default:
      return `background:${COLORS.white}; color:${COLORS.grey800}; border:1px solid black`;
  }
};
const SpecialButtonStyled = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  ${({ theme }) => handleColorType(theme)};
  /* background: ${(props) =>
    props.special ? COLORS.negative200 : COLORS.warning100}; */
  border-radius: ${(props) =>
    props.special ? '0px 0px 0px 12px' : '0px 0px 12px 0px'};
  /* color: ${(props) =>
    props.special ? COLORS.negative600 : COLORS.warning600}; */
  font-weight: bold;
  &:hover {
    filter: brightness(1.1);
  }
`;
export default SpecialButtonStyled;
