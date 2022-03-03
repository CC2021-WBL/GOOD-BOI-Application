import styled from 'styled-components';

const FooterInnerStyled = styled.footer`
  min-width: 600px;
  max-width: 1200px; // 02.03.2022
  display: flex;
  margin: auto;
  padding: 2rem;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  gap: clamp(2rem, 15vw, 15rem);
`;

export default FooterInnerStyled;
