import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const NotFoundPageWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 51px 16px;

  .mainContentWrapper {
    display: flex;
    width: 16.25rem;
    height: 7.5rem;
    flex-direction: column;
    justify-content: space-between;
    margin: 35px 0 68px;

    h2 {
      color: ${({ theme }) => theme.grey800};
      ${FONTS.h2}
    }

    p {
      color: ${({ theme }) => theme.grey800};
      ${FONTS.caption}
    }
  }

  .buttons-wrapper {
    width: 100%;
  }

  @media only screen and (min-width: 800px) {
    grid-area: 3 / 2 / 4 / 3;
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
  }
`;

export default NotFoundPageWrapperStyled;
