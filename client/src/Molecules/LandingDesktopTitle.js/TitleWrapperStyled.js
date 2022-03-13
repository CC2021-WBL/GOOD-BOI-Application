import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const TitleWrapperStyled = styled.div`
  max-width: 600px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: -2.1875rem 0 0 0;
  h1 {
    font-size: 3rem;
  }
  h3 {
    ${FONTS.h3}
  }
`;

export default TitleWrapperStyled;
