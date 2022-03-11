import styled from 'styled-components';

const BackgroundDiv = styled.div`
  position: absolute;
  background-image: url(${require(`../../Assets/GoogBoi-heroGraphic.png`)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100% 50%;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: -1;
  right: 0;
  margin: auto;
`;
export default BackgroundDiv;
