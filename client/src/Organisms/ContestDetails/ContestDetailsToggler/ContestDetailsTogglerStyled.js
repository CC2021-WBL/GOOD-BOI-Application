import FONTS from '../../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const ContestDetailsTogglerStyled = styled.div`
  display: flex;
  height: 2.75rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary101};
  cursor: pointer;
  gap: 0.75rem;
  ${FONTS.label_semibold};

  :hover {
    opacity: 0.9;
  }

  p {
    color: ${({ theme }) => theme.grey400};
  }
`;

export default ContestDetailsTogglerStyled;
