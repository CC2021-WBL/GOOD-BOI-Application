import styled from 'styled-components';
import ExerciseCardStyled from '../../Molecules/ExerciseCard/ExerciseCardStyled';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const PointStyled = styled(ExerciseCardStyled)`
  margin: 0;
  width: 25%;
  justify-content: center;
  ${FONTS.h1};
  border-radius: 0;
  ${(props) =>
    props.toggle
      ? `background-color: ${COLORS.positive200};`
      : `background-color:  ${COLORS.grey100}; ${FONTS.label_regular}; padding: 1rem`}
`;

export default PointStyled;
