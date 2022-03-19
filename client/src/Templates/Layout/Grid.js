import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 40px 1fr 77px;

  @media only screen and (min-width: 800px) {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 110px 85px 3fr 110px;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 220px 1fr;
  }
  @media only screen and (min-width: 1600px) {
    // 230px is minimal value for the column width for the last sidebar menu item - is it acceptable for the main content window?
    grid-template-columns: 1fr 230px minmax(360px, 1160px) 220px 1fr;
    grid-template-rows: 110px 85px 3fr 240px;
  }
`;

export default Grid;
