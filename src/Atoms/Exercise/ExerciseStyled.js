import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import ExerciseCardStyled from '../../Molecules/ExerciseCard/ExerciseCardStyled';
import COLORS from '../../Styles/varsStyledComponents';

const ExerciseStyled = styled(ExerciseCardStyled)`
  box-sizing: border-box;
  width: 50%;
  margin: 0;
  padding: 0.625rem;
  align-items: center;
  text-align: left;
  border-radius: 0.75rem 0 0 0.75rem;
  ${FONTS.body_semibold};
  ${(props) =>
    props.toggle
      ? `background-color: ${COLORS.positive200};`
      : `background-color:  ${COLORS.grey100}; color: ${COLORS.grey400}`}
`;

export default ExerciseStyled;
