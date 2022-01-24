import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';

export const FooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0 1rem;
  height: 77px;
  border-top: 2px solid ${COLORS.grey00};
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
  font-size: 0.75rem;
  text-align: left;
  align-self: center;
  margin: 0 0 0 10px;
`;
