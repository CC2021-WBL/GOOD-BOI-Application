import styled from 'styled-components';

const ContestsWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.75rem 0 0 0;
  grid-area: 3 / 1 / 4 / 2;
  .mockmap {
    display: none;
  }
  @media only screen and (min-width: 800px) {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0;
    gap: 1.25rem;
    grid-area: 3 / 1 / 4 / 3;
    grid-column-start: ${(props) => props.contentPosition && 2};
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
    .mockmap {
      display: block;
      width: 29.75rem;
      height: 28rem;
      margin: 1.5625rem 1.25rem 0 0;

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.75rem;
      }
    }
  }
`;

export default ContestsWrapperStyled;
