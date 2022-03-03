import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const GreyLabelStyled = styled.div`
  grid-area: 2 / 1 / 3 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.grey00};

  .greyLabelText {
    color: ${({ theme }) => theme.grey800};
    ${FONTS.body_semibold};
  }

  @media only screen and (min-width: 800px) {
    background: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.grey200};
    .greyLabelText {
      max-width: 800px;
      justify-content: left;
    }
  }
  @media only screen and (min-width: 1600px) {
    display: grid;
    grid-template-columns: 1fr 220px minmax(360px, 1160px) 220px 1fr;
    justify-content: start;
    background: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.grey200};
    .greyLabelText {
      grid-area: 2 / 2 / 5 / 3;
      font-size: 1.25rem;
    }
  }
`;

export default GreyLabelStyled;
