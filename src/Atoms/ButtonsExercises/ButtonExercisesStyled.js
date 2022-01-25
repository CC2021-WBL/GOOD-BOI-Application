import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const handleBgAndColor = (props) => {
  if (props.endingButton) {
    return `color: ${COLORS.grey800}; background: ${COLORS.grey100};`;
  }
  if (props.goBack) {
    return `color: ${COLORS.primary801}; background: ${COLORS.primary201}; 
    :before {content: "<" ; width: 100px; height:100px; position: absolute; transform: translate(-70px); font-size: 20px}`;
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
