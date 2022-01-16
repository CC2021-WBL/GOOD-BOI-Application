import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';

const SpecialButtonsStyled = styled.button`
  width: 49%;
  height: 43px;
  padding: 10px;
  color: ${(props) => (props.special ? COLORS.negative600 : COLORS.warning600)};
  border-radius: ${(props) =>
    props.special ? '0px 0px 0px 12px' : '0px 0px 12px 0px'};
  background: ${(props) =>
    props.special ? COLORS.negative200 : COLORS.warning100};
  font-weight: bold;
  border: none;
  &:hover {
    filter: brightness(1.1);
  }
`;
export default SpecialButtonsStyled;
