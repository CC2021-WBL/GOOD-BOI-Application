import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const handleBgAndColor = (props) => {
  if (props.primary) {
    return `color: ${props.theme.white}; background: ${props.theme.primary501};`;
  }
  if (props.secondary) {
    return `color: ${props.theme.primary801}; background: ${props.theme.primary201}; 
    `;
  }
};

const ButtonExercisesStyled = styled.button`
  width: 50%;
  height: 100%;
  padding: 10px;
  border-style: none;
  margin: 0.25rem 0;
  ${FONTS.label_semibold};
  ${(props) => handleBgAndColor(props)};

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0.125rem 0.25rem ${({ theme }) => theme.primary201};
    cursor: pointer;
  }
`;

export default ButtonExercisesStyled;
