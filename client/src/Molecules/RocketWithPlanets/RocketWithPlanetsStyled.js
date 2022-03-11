import planets from '../../Assets/planets.png';
import styled from 'styled-components';

const RocketWithPlanetsStyled = styled.div`
  @media only screen and (min-width: 1600px) {
    display: block;
    grid-area: 4 / 4 / 5 / 5;
    background-image: url(${planets});
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
    bottom: 4.9375rem;
    left: 9.375rem;
  }
`;

export default RocketWithPlanetsStyled;
