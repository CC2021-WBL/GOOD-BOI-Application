import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const SelectFieldStyled = styled.select`
  width: 100%;
  height: 3rem;
  padding: 0 0 0 10px;
  border: 0.5px solid ${({ theme }) => theme.grey400};
  margin: 0 0 3px 0;
  background: ${({ theme }) => theme.white};
  border-radius: 8px;
  color: ${({ theme }) => theme.grey400};
  font-family: Mulish, FontAwesome, sans-serif;
  ${FONTS.body_semibold};
  &::placeholder {
    color: ${({ theme }) => theme.grey400};
  }
  &:focus {
    border: 0.5px solid transparent;
    outline: 3px solid ${({ theme }) => theme.primary201};
  }
`;

export default SelectFieldStyled;
