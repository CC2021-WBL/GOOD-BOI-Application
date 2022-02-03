import FONTS from '../../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const ContestDetailsTogglerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.75rem;
  background-color: ${({ theme }) => theme.primary101};
  ${FONTS.label_semibold};
  gap: 0.75rem;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  p {
    color: ${({ theme }) => theme.grey400};
  }
`;

export default ContestDetailsTogglerStyled;
