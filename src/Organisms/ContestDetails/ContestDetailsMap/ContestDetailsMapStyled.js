import mapmock from '../../../Assets/mockmap.png';
import styled from 'styled-components';

const ContestDetailsMapStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.grey200};
  height: 8.5rem;
  background-image: url(${mapmock});
`;

export default ContestDetailsMapStyled;
