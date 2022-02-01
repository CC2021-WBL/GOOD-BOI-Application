import COLORS from '../../Styles/varsStyledComponents';
import styled from 'styled-components';

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
  border-radius: ${(props) => props.left && '0 0 0 0.75rem'};

  border-radius: ${(props) => props.right && '0 0 0.75rem 0'};

  font-weight: bold;
  ${({ theme }) => handleColorType(theme)};
  &:hover {
    filter: brightness(1.1);
  }
`;
export default SpecialButtonStyled;
