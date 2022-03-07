import styled from 'styled-components';

const ContestsWrapperStyled = styled.div`
display: flex;
justify-content:center;
  .mockmap {
    display: none;
  }
  grid-area: 3 / 1 / 4 / 2;
  margin: 60px 0 0 0;
  @media only screen and (min-width: 800px) {
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    grid-area: 3 / 2 / 4 / 3;
    
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
    .mockmap {
      display: block;
      width: 476px;
      height: 448px;
      margin: 60px 20px 0 0;

      img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
      }
    }}
`;

export default ContestsWrapperStyled;
