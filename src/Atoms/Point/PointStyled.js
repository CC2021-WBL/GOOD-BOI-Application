import styled from 'styled-components';
import ExerciseCardStyled from '../../Molecules/ExerciseCard/ExerciseCardStyled';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const PointStyled = styled(ExerciseCardStyled)`
  box-sizing: border-box;
  width: 25%;
  margin: 0;
  justify-content: center;
  align-items: center;
  ${FONTS.h1};
  ${(props) =>
    props.toggle
      ? `background-color: ${COLORS.positive200};`
      : `background-color:  ${COLORS.grey100}; ${FONTS.label_regular}; padding: 1rem`}
`;

export default PointStyled;
