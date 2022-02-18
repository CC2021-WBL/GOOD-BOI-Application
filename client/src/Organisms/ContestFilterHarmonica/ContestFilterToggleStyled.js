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

  :hover {
    opacity: 0.9;
  }

  p {
    color: ${({ theme }) => theme.grey800};
  }
`;

export default ContestFilterTogglerStyled;
