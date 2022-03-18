import ErrorPageGraphic from '../../Assets/ErrorPageGraphic.png';
import NotFoundPageWrapperStyled from '../../Organisms/NotFoundContent/NotFoundPageWrapperStyled';

const ErrorPage = ({ ResStatus }) => {
  return (
    <NotFoundPageWrapperStyled style={{ textAlign: 'center' }}>
      <img src={ErrorPageGraphic} alt="Doggo in space" />
      <div className="text-wrapper">
        <h1>Coś poszło nie tak.</h1>
        {/* W zależności od podanego statusu wyświetla się konkretna wiadomość
        na każdej stronie wypada dodać regułę która przenosi razem ze zwróconym 
        statusem na error page i wyświetla konkretną wiadomość */}
        {/* <p>{ERROR_MSG.ResStatus}</p> */}
      </div>
    </NotFoundPageWrapperStyled>
  );
};

export default ErrorPage;
