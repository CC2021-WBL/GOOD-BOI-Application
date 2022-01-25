import styled from 'styled-components';

import COLORS from '../../Styles/varsStyledComponents';

export const FooterStyled = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  height: 77px;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;

  border-top: 2px solid ${COLORS.grey00};
  margin: 0;
  background: ${COLORS.white};
`;

export const LogoStyled = styled.div`
  display: flex;
  pointer-events: none;
`;

export const DevsLogo = styled.div`
  align-self: center;
`;

export const Copy = styled.div`
  align-self: center;
  margin: 0 0 0 10px;
  font-size: 0.75rem;
  text-align: left;
`;
