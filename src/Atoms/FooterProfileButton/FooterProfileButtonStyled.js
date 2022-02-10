import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

export const Div = styled.div`
  color: ${({ theme }) => theme.grey800};
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
  color: ${({ theme }) => theme.grey400};
  font-size: 1.625rem;

  .bg-box {
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    background-image: url(${require(`../../Assets/profileDogFace.jpg`)});
    background-size: cover;
    border-radius: 50%;
    border: 1px solid #c4c4c4;
    position: relative;
  }
`;
