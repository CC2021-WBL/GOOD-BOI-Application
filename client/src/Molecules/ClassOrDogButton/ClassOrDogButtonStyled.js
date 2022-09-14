import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const ClassOrDogButtonStyled = styled.button`
  display: flex;
  width: 100%;
  height: 4.375rem;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: solid 1px ${({ theme }) => theme.grey800};
  margin: 0.5rem 0;
  background: ${({ theme }) => theme.white};
  border-radius: 0.75rem;
  color: ${({ theme }) => theme.grey800};
  ${FONTS.h3}

  &.user-dogs-button {
    @media only screen and (min-width: 800px) {
      max-width: 35rem;
    }
  }
  &:hover {
    filter: brightness(1.05);
    cursor: pointer;
    box-shadow: 2px 4px ${({ theme }) => theme.primary201};
  }
`;
export default ClassOrDogButtonStyled;
