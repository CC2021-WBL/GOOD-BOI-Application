import mapmock from '../../../Assets/mockmap.png';
import mockMAP from '../../../Assets/mockMAP.JPG';
import styled from 'styled-components';

const ContestDetailsMapStyled = styled.div`
  display: flex;
  height: 8.5rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.grey200};

  &.contest-data {
    @media only screen and (min-width: 800px) {
      background-image: url(${mapmock});
    }
    @media only screen and (min-width: 1024px) {
      background-image: url(${mockMAP});
      grid-area: 1 / 1 / 2 / 3;
      height: 100%;
    }
    @media only screen and (min-width: 1600px) {
      background-image: url(${mockMAP});
    }
  }
`;

export default ContestDetailsMapStyled;
