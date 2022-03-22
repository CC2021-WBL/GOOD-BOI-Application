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
    caption {
      text-align: left;
      white-space: nowrap;
      margin-bottom: 2rem;
    }
    .baloon {
      font-weight: 900;
      display: flex;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.grey200};
      width: 2rem;
      height: 2rem;
      background: none;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      color: ${({ theme }) => theme.grey200};
    }
    .active {
      background: ${({ theme }) => theme.primary101};
      border: 3px solid ${({ theme }) => theme.primary601};
      color: ${({ theme }) => theme.primary601};
    }
    .line {
      height: 2px;
      width: 1rem;
      background: ${({ theme }) => theme.grey200};
      align-self: center;
    }
  }
`;

const DogFormHeader = () => {
  return (
    <DogFormHeaderStyled className="dog-form-header">
      <h2>Uzupełnij dane psa</h2>
      <caption>Wpisz wszystkie dane swojego psa</caption>
      <div
        className="baloons"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className="baloon active">1</div>
        <div className="line"></div>
        <div className="baloon">2</div>
        <div className="line"></div>
        <div className="baloon">3</div>
      </div>
    </DogFormHeaderStyled>
  );
};

export default DogFormHeader;
