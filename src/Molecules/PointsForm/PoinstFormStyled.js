// import COLORS from '../../Styles/varsStyledComponents';

import styled from 'styled-components';

const PointsFormStyled = styled.form`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.grey100};
  color: aliceblue;
`;

export default PointsFormStyled;
