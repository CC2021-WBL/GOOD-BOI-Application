import styled from 'styled-components';

const CornerMenuStyled = styled.div`
  display: block;
  position: absolute;
  bottom: -7.6rem;
  width: 100%;
  background: ${({ theme }) => theme.grey00};
  &.cornerMenuItems {
  }
`;

export default CornerMenuStyled;
