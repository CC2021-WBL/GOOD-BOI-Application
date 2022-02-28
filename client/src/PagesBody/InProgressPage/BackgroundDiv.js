import styled from 'styled-components';

const BackgroundDiv = styled.div`
  position: absolute;
  background-image: url(${require(`../../Assets/GoogBoi-heroGraphic.png`)});
  background-size: cover;
  background-repeat: no-repeat;
  /* position: fixed; */
  background-position: 100% 50%;
  height: 100vh;
  width: 100%;
  z-index: -1;
  /* left: 0; */
  /* top: 0; */
  right: 0;
  /* bottom: 0; */
  margin: auto;
`;
export default BackgroundDiv;
