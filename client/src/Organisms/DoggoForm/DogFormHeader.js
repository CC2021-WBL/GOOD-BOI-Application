import styled from 'styled-components';

const DogFormHeaderStyled = styled.div`
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

const DogFormHeader = () => {
  return (
    <DogFormHeaderStyled>
      <h2>Uzupełnij dane psa</h2>
      <p>Wpisz wszystkie dane swojego psa</p>
    </DogFormHeaderStyled>
  );
};

export default DogFormHeader;
