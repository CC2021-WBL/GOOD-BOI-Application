import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const GreyLabelStyled = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: ${({ theme }) => theme.grey00};
  height: 100%;

  .greyLabelText {
    color: ${({ theme }) => theme.grey800};
    ${FONTS.body_semibold};
  }

  @media only screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 13.75rem 1fr;
    justify-content: left;
    background: ${({ theme }) => theme.white};
    border-bottom: 0.0625rem solid ${({ theme }) => theme.grey200};
    .greyLabelText {
      font-size: 1.25rem;
      text-align: left;
      padding-left: 1rem;
    }
  }
  @media only screen and (min-width: 1600px) {
    grid-template-columns: 1fr 13.75rem minmax(22.5rem, 72.5rem) 13.75rem 1fr;
    .greyLabelText {
      text-align: left;
      padding-left: 1rem;
      grid-column: 2;
    }
  }
`;

export default GreyLabelStyled;
