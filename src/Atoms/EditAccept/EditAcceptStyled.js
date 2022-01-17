import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const EditAcceptStyled = styled.button`
  margin: 0;
  width: 25%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  min-height: 5.5rem;
  border-radius: 0 0.75rem 0.75rem 0;
  ${FONTS.label_regular};
  ${(props) =>
    props.toggle
      ? `background-color: ${COLORS.positive100};`
      : `background-color:  ${COLORS.positive200}`}
`;

export default EditAcceptStyled;
