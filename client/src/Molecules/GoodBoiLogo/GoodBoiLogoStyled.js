import styled from 'styled-components';

const GoodBoiLogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  div {
    user-select: none;
    white-space: nowrap;
    color: ${({ theme }) => theme.grey800};
  }
}
  
`;
export default GoodBoiLogoStyled;
