// import COLORS from '../../Styles/varsStyledComponents';

import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const EditAcceptStyled = styled.button`
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0;
  margin: 0;
  border-radius: 0 0.75rem 0.75rem 0;
  color: ${({ theme }) => theme.grey800};
  cursor: pointer;
  ${FONTS.label_regular};
  ${(props) =>
    props.toggle
      ? `background-color: ${props.theme.positive100};`
      : `background-color:  ${props.theme.positive200}`}
`;

export default EditAcceptStyled;
