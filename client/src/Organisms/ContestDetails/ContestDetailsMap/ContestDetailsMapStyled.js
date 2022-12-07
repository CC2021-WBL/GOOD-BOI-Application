import mapmock from '../../../Assets/mockmap.png';
import mockMAP from '../../../Assets/mockMAP.JPG';
import styled from 'styled-components';

const ContestDetailsMapStyled = styled.div`
  display: flex;
  height: 8.5rem;
  align-items: center;
  justify-content: center;
  background-image: url(${mapmock});
  img {
    display:none;
  }

  &.contest-data-map {
    @media only screen and (min-width: 800px) {
      background-image: url(${mapmock});
    }
    @media only screen and (min-width: 1024px) {
      padding: 1.5rem;
      background-image: none;
      grid-area: 1 / 2 / 2 / 3;
      height: 100%;
      display: flex;
      align-items: start;

      img {
        display: block;
        width: 100%;
        border-radius: 0.75rem;
      }
    }


  }

}
`;

export default ContestDetailsMapStyled;
