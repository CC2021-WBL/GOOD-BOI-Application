import styled from 'styled-components';

const RegistrationFormHeaderStyled = styled.div`
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

const RegistrationFormHeader = () => {
  return (
    <RegistrationFormHeaderStyled className="form-header">
      <h2>Dołącz do nas!</h2>
      <p>Zarejestruj się i pokochaj świat zawodów obedience.</p>
    </RegistrationFormHeaderStyled>
  );
};

export default RegistrationFormHeader;
