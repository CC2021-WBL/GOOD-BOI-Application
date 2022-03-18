import styled from 'styled-components';

const ErrorBoundaryStyled = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .text-wrapper {
    color: ${({ theme }) => theme.grey800};
  }

  .error-link {
    margin: 1rem;
    width: 100%;
    height: 3.25rem;
    border-radius: 10px;
    text-decoration: none;
    color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    font-size: 0.9375rem;
  }

  .error-link__contact {
    color: ${({ theme }) => theme.white};
    border: 0.5px solid ${({ theme }) => theme.grey800};
    background-color: ${({ theme }) => theme.primary501};
  }
`;

export default ErrorBoundaryStyled;
