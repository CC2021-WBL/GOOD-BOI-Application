import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const handleBgAndColor = (props) => {
  if (props.endingButton) {
    return `color: ${props.theme.grey800}; background: ${props.theme.grey100};`;
  }
  if (props.goBack) {
    return `color: ${props.theme.primary801}; background: ${props.theme.primary201}; 
    `;
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
