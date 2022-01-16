import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const LabelStyled = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem;
  height: 1.25rem;
  ${FONTS.caption}
  border: solid 1px ${COLORS.grey800};
  border-radius: 0.25rem;
  line-height: 1em;
  ${(props) =>
    props.isClassCompleted || props.areExercisesCompleted
      ? `background: ${COLORS.positive200}; color: ${COLORS.positive600};  border: solid 1px  ${COLORS.positive600};`
      : `background: transparent`};
`;

export default LabelStyled;
