import styled from 'styled-components';
import FONTS from '../../../Styles/fontsStyledComponents';

const ContestDetailsContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  ${FONTS.label_extrabold};

  @media only screen and (min-width: 1024px) {
    margin: 0 1rem 0 1rem;
  }
`;

export default ContestDetailsContentStyled;
