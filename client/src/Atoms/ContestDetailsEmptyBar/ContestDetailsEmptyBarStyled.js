import styled from 'styled-components';

const ContestDetailsEmptyBarStyled = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: block;
    height: 3rem;
    background-color: ${({ theme }) => theme.primary101};
    margin: 0 1rem 0 1rem;
    border-radius: 0 0 0.75rem 0.75rem;
  }
`;

export default ContestDetailsEmptyBarStyled;
