import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const ContestFilterTogglerStyled = styled.div`
  display: flex;
  height: 2.625rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.grey100};
  cursor: pointer;
  gap: 0.75rem;
  ${FONTS.label_semibold};
  /* border-radius: 0 0 12px 12px; */
  margin-top: -8px;
  &:hover {
    opacity: 0.9;
  }

  p {
    color: ${({ theme }) => theme.grey800};
  }

  @media only screen and (min-width: 800px) {
    border-radius:12px 12px 0 0;
  }
  /* @media only screen and (min-width: 1600px) {
    border-radius:12px 12px 0 0;
    
  } */
`;

export default ContestFilterTogglerStyled;
