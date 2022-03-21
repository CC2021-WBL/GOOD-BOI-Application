import styled from 'styled-components';

const SpecialButtonsContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  align-items: center;
  justify-content: space-around;
  margin: 0 0 0.125rem 0;

  @media only screen and (min-width: 1024px) {
    margin: 0;
    & > *:nth-of-type(1) {
      border-radius: 0 0 0 0.75rem;
    }
    & > *:nth-of-type(2n) {
      border-radius: 0 0 0.75rem 0;
    }
  }
`;
export default SpecialButtonsContainerStyled;
