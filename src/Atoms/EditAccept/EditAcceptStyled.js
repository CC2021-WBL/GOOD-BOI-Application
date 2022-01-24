import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const EditAcceptStyled = styled.button`
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0;
  margin: 0;
  border-radius: 0 0.75rem 0.75rem 0;
  cursor: pointer;
  ${FONTS.label_regular};
  ${(props) =>
    props.toggle
      ? `background-color: ${COLORS.positive100};`
      : `background-color:  ${COLORS.positive200}`}
`;

export default EditAcceptStyled;
