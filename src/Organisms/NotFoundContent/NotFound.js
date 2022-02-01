import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import notFound from '../../Assets/notFound.png';
import MainButton from '../../Atoms/MainButton/MainButton';
import NotFoundPageWrapperStyled from './NotFoundPageWrapperStyled';

const NotFound = () => {
  const navigate = useNavigate();
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
        <MainButton
          secondary
          text="wroć do poprzedniej strony"
          onClick={() => navigate(-1)}
        />
        <Link to="/contactForm">
          <MainButton ternary text="Formularz kontaktowy" />
        </Link>
      </div>
    </NotFoundPageWrapperStyled>
  );
};

export default NotFound;
