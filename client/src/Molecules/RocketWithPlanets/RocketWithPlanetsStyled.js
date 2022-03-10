import styled from 'styled-components';

import planets from '../../Assets/planets.png';

const RocketWithPlanetsStyled = styled.div`
  background-image: url(${planets});
  background-repeat: no-repeat;
  width: 20%;
  height: 35%;
  /* position: relative; */
  position: absolute;
  /* bottom: 100px; */
  /* left: 1300px; */
  right: 0px;
  bottom: 0px;
  z-index: 12;
  display: none;
  border: 5px solid black;

  @media only screen and (min-width: 1600px) {
    display: block;
  }
`;

export default RocketWithPlanetsStyled;
