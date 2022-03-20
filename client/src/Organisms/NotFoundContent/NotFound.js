import { useNavigate } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import notFound from '../../Assets/notFound.png';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <ColumnWrapper
      paddingLeftRight={1}
      maxWidthBigScreen={35}
      className="not-found-wrapper"
    >
      <img src={notFound} alt="Dog with question mark" />
      <div className="main-content-wrapper">
        <h2>Strona nie istnieje.</h2>
        <p>
          Przepraszamy, nie znaleźliśmy strony o tym adresie. <br /> Przejdź do
          poprzedniej strony lub skontaktuj się z nami.
        </p>
      </div>
      <div className="buttons-wrapper">
        <MainButton
          secondary
          text="Wróć do poprzedniej strony"
          onClick={() => navigate(-1)}
        />

        <FakeButton
          colors="ternary"
          text="Formularz kontaktowy"
          to="/contact-form"
        />
      </div>
    </ColumnWrapper>
  );
};

export default NotFound;
