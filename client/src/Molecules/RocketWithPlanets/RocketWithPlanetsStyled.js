import planets from '../../Assets/planets.png';
import styled from 'styled-components';

const RocketWithPlanetsStyled = styled.div`
  display: none;
  @media only screen and (min-width: 1600px) {
    display: block;
    grid-area: 4 / 4 / 5 / 5;
    background-image: url(${planets});
    background-repeat: no-repeat;
    position: relative;
    bottom: 4.9375rem;
  }
`;

export default RocketWithPlanetsStyled;
