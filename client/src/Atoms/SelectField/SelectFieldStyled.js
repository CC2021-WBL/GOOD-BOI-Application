import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const SelectFieldStyled = styled.select`
  width: 100%;
  height: 3rem;
  padding: 0 0 0 0.625rem;
  border: 0.5px solid ${({ theme }) => theme.grey400};
  margin: 0 0 0.1875rem 0;
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.grey400};
  font-family: Mulish, FontAwesome, sans-serif;
  ${FONTS.body_semibold};
  &::placeholder {
    color: ${({ theme }) => theme.grey400};
  }
  &:focus {
    border: 0.0313rem solid transparent;
    outline: 0.1875rem solid ${({ theme }) => theme.primary201};
  }
`;

export default SelectFieldStyled;
