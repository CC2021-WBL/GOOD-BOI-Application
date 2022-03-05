import styled from 'styled-components';

const FooterInnerStyled = styled.footer`
  display: flex;
  min-width: 600px;
  max-width: 1200px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin: auto;
  gap: clamp(2rem, 15vw, 15rem);
`;

export default FooterInnerStyled;
