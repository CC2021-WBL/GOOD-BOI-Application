import styled from 'styled-components';

const ContestFormHeaderStyled = styled.div`
  display: none;
  margin-top: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.grey800};

  @media only screen and (min-width: 800px) {
    display: block;
    h2 {
      margin-bottom: 1rem;
    }
    p {
      text-align: left;
      white-space: nowrap;
      margin-bottom: 2rem;
    }
  }
`;

const ContestFormHeader = () => {
  return (
    <ContestFormHeaderStyled>
      <h2>Dodaj zawody</h2>
      <p>Uzupełnij wszystkie pola.</p>
    </ContestFormHeaderStyled>
  );
};

export default ContestFormHeader;
