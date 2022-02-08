import mapmock from '../../../Assets/mockmap.png';
import styled from 'styled-components';

const ContestDetailsMapStyled = styled.div`
  display: flex;
  height: 8.5rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.grey200};
  background-image: url(${mapmock});
`;

export default ContestDetailsMapStyled;
