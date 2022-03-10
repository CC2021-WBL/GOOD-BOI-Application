import planets from '../../Assets/planets.png';
import styled from 'styled-components';

const RocketWithPlanetsStyled = styled.div`
  background-image: url(${planets});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: relative;
  bottom: 100px;
  left: 1300px;
  z-index: 1;
  display: none;

  @media only screen and (min-width: 1600px) {
    display: block;
  }
`;

export default RocketWithPlanetsStyled;
