import planets from '../../Assets/planets.png';
import styled from 'styled-components';

const RocketWithPlanetsStyled = styled.div`
  background-image: url(${planets});
  background-repeat: no-repeat;
  width: 500px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: none;

  @media only screen and (min-width: 800px) {
    display: block;
  }
`;

export default RocketWithPlanetsStyled;
