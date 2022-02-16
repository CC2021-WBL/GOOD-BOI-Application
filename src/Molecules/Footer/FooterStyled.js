import styled from 'styled-components';

export const FooterStyled = styled.div`
  position: fixed;
  right: 0;
  /* bottom: 0; */
  top: calc(100vh - 2 * 78px);
  left: 0;
  display: flex;
  height: 78px;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-top: 2px solid ${({ theme }) => theme.grey00};
  margin: 0;
  background: ${({ theme }) => theme.white};
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
  color: ${({ theme }) => theme.grey800};
  font-size: 0.75rem;
  text-align: left;
`;
