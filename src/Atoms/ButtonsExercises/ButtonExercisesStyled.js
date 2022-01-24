import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const handleBgAndColor = (props) => {
  if (props.endingButton) {
    return `color: ${COLORS.primary101}; background: ${COLORS.primary501};`;
  }
  if (props.goBackButton) {
    return `color: ${COLORS.primary101}; background: ${COLORS.warning100};`;
  }
};

const ButtonExercisesStyled = styled.button`
  width: 50%;
  height: 100%;
  margin: 0.25rem 0 0.25rem 0;
  padding: 10px;
  ${FONTS.label_semibold};
  border-style: none;
  ${(props) => handleBgAndColor(props)};
`;

export default ButtonExercisesStyled;
