import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const TitleWrapperStyled = styled.div`
  display: flex;
  max-width: 37.5rem;
  flex-direction: column;
  align-items: flex-start;
  margin: -2.1875rem 0 0 0;
  text-align: left;
  h1 {
    font-size: 3rem;
  }
  h3 {
    ${FONTS.h3}
  }
`;

export default TitleWrapperStyled;
