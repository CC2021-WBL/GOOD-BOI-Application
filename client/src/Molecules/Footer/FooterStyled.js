import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

export const FooterStyled = styled.div`
  &.mobile {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    height: 4.875rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    border-top: 2px solid ${({ theme }) => theme.grey00};
    margin: 0 auto;
    background: ${({ theme }) => theme.white};
    @media only screen and (min-width: 800px) {
      display: none;
    }
  }
  &.non-mobile-wrapper {
    display: none;
    background: ${({ theme }) => theme.grey00};
    @media only screen and (min-width: 800px) {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  &.non-mobile {
    display: none;
    text-align: right;

    @media only screen and (min-width: 800px) {
      display: flex;
      width: 100%;
      min-width: 600px;
      height: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 2rem;
      margin: auto;
      gap: clamp(2rem, 10vw, 15rem);
      p {
        color: ${({ theme }) => theme.grey800};
        ${FONTS.body_semibold};
        white-space: nowrap;
      }
      h3 {
        color: ${({ theme }) => theme.grey400};
      }
    }
    @media only screen and (min-width: 1600px) {
      max-width: 1200px;
      align-items: center;
      justify-content: center;
    }
  }
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
  white-space: nowrap;
`;
