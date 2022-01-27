import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';

const SpecialButtonStyled = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  background: ${(props) =>
    props.special ? COLORS.negative200 : COLORS.warning100};
  border-radius: ${(props) =>
    props.special ? '0 0 0 0.75rem' : '0 0 0.75rem 0'};
  color: ${(props) => (props.special ? COLORS.negative600 : COLORS.warning600)};
  font-weight: bold;
  &:hover {
    filter: brightness(1.1);
  }
`;
export default SpecialButtonStyled;
