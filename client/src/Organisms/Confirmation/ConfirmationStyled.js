import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

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
    ${FONTS.body_regular};
    color: ${({ theme }) => theme.grey800};

    span {
      ${FONTS.body_bold}
    }
  }
  @media only screen and (min-width: 800px) {
    grid-area: 3 / 2 / 4 / 3;
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
  }
`;

export default ConfirmationStyled;
