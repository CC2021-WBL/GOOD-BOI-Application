import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

export const ProfileBtnWrapper = styled.button`
  font-size: 26px;
  color: ${COLORS.grey400};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: auto;
  height: 50px;
  background: transparent;
  border: none;
  &:hover {
    background: #f5f5f5;
  }
`;

export const Div = styled.div`
  ${FONTS.label_regular}
  color: black;
`;
