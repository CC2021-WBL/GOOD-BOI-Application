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
    border-top: 0.125rem solid ${({ theme }) => theme.grey00};
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
      min-width: 37.5rem;
      height: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 2rem;
      margin: auto;
      font-size: 0.8125rem;
      gap: clamp(2rem, 10vw, 15rem);
      p {
        color: ${({ theme }) => theme.grey800};
        white-space: nowrap;
      }
      h3 {
        padding: 0 0 1rem 0;
        color: ${({ theme }) => theme.grey400};
      }
    }
    @media only screen and (min-width: 1600px) {
      max-width: 101.25rem;
      align-items: center;
      justify-content: space-between;
      ${FONTS.body_semibold};
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
  margin: 0 0 0 0.625rem;
  color: ${({ theme }) => theme.grey800};
  font-size: 0.75rem;
  text-align: left;
  white-space: nowrap;
`;
