import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
const NotFoundPageWrapper = styled.div`
  margin: 51px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .mainContentWrapper {
    width: 16.25rem;
    height: 7.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 35px 0 68px 0;

    h2 {
      ${FONTS.h2}
    }

    p {
      ${FONTS.caption}
    }
  }

  .buttons-wrapper {
    width: 100%;
  }
`;

export default NotFoundPageWrapper;
