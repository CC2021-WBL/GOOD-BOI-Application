import notFound from '../../Assets/notFound.png';
import NotFoundPageWrapperStyled from './NotFoundPageWrapperStyled';
import MainButton from '../../Atoms/MainButton/MainButton';
const NotFound = () => {
  return (
    <NotFoundPageWrapperStyled>
      <img src={notFound} alt="Dog with question mark" />
      <div className="mainContentWrapper">
        <h2>Strona nie istnieje.</h2>
        <p>
          Przepraszamy, nie znaleźliśmy strony o tym adresie. <br /> Przejdź do
          poprzedniej strony lub skontaktuj się z nami.
        </p>
      </div>
      <div className="buttons-wrapper">
        <MainButton secondary text="wroć do poprzedniej strony" />
        <MainButton ternary text="Formularz kontaktowy" />
      </div>
    </NotFoundPageWrapperStyled>
  );
};

export default NotFound;
