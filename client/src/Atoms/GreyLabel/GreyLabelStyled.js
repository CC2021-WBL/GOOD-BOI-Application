import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const GreyLabelStyled = styled.div`
  display: flex;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.grey00};

  .greyLabelText {
    color: ${({ theme }) => theme.grey800};
    ${FONTS.body_semibold};
  }
`;

export default GreyLabelStyled;
