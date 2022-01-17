import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const EditAcceptStyled = styled.button`
  box-sizing: border-box;
  width: 25%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 0 0.75rem 0.75rem 0;
  ${FONTS.label_regular};
  ${(props) =>
    props.toggle
      ? `background-color: ${COLORS.positive100};`
      : `background-color:  ${COLORS.positive200}`}
`;

export default EditAcceptStyled;
