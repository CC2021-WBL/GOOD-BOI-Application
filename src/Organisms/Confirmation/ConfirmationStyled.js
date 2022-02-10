import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';

const ConfirmationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.4375rem;

  div {
    display: flex;
    width: 19.625rem;
    height: 13.9375rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 1.25rem 0;
    ${FONTS.body_regular}

    span {
      ${FONTS.body_bold}
    }
  }
`;

export default ConfirmationStyled;
