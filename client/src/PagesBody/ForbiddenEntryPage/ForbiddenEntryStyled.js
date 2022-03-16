import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const ForbiddenWrapperStyled = styled.div`
  margin: 0 1rem;
  img {
    margin: 3.125rem 0;
  }

  h1 {
    margin: 0 0 3.125rem 0;
    color: ${({ theme }) => theme.grey800};
    ${FONTS.h2};
  }
  @media only screen and (min-width: 800px) {
    grid-area: 3 / 2 / 4 / 3;
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
  }
`;

export default ForbiddenWrapperStyled;
