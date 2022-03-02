import styled from 'styled-components';

const ContestsWrapperStyled = styled.div`
  .mockmap {
    display: none;
  }
  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 50px;

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
    }
  }
`;

export default ContestsWrapperStyled;
