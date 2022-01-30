import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

export const Div = styled.div`
  color: black;
  ${FONTS.label_regular}
`;

export const FooterProfileButtonStyled = styled.button`
  display: flex;
  width: auto;
  height: 50px;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: ${COLORS.grey400};
  font-size: 1.625rem;
`;
