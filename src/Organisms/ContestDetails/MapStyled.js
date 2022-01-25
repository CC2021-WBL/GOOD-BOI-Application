import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import mapmock from '../../Assets/mockmap.png';

const MapStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.grey200};
  height: 8.5rem;
  background-image: url(${mapmock});
`;

export default MapStyled;
