import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ErrorPageGraphic from '../../Assets/ErrorPageGraphic.png';
import MainButton from '../../Atoms/MainButton/MainButton';
import NotFoundPageWrapperStyled from '../../Organisms/NotFoundContent/NotFoundPageWrapperStyled';

const ErrorPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
      <NotFoundPageWrapperStyled>
        <img src={ErrorPageGraphic} alt="Doggo in space" />
        <div className="mainContentWrapper">
          <h1>Coś poszło nie tak...</h1>
          <p>Wróć do poprzedniej strony i spróbuj ponownie później.</p>
        </div>
      </NotFoundPageWrapperStyled>
      <MainButton secondary text="Powrót do strony głównej"></MainButton>
    </ColumnWrapper>
  );
};

export default ErrorPage;
