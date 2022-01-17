import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import ExerciseCardStyled from '../../Molecules/ExerciseCard/ExerciseCardStyled';
import COLORS from '../../Styles/varsStyledComponents';

const ExerciseStyled = styled(ExerciseCardStyled)`
  margin: 0;
  width: 50%;
  text-align: left;
  padding: 0.625rem;
  ${FONTS.body_semibold};
  border-radius: 0.75rem 0 0 0.75rem;
  ${(props) =>
    props.toggle
      ? `background-color: ${COLORS.positive200};`
      : `background-color:  ${COLORS.grey100}; color: ${COLORS.grey400}`}
`;

export default ExerciseStyled;
