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
      <a
        className="error-link"
        href="/"
        onClick={() => {
          window.location.reload();
        }}
      >
        Wróc do strony głównej!
      </a>
      <a
        className="error-link error-link__contact"
        href="/contact-form"
        onClick={() => {
          window.location.reload();
        }}
      >
        Skontaktuj się z nami!
      </a>
    </NotFoundPageWrapperStyled>
  );
};

export default ErrorPage;
