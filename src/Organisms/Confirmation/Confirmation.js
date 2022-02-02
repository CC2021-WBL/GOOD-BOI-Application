import ConfirmationStyled from './ConfirmationStyled';
import MainButton from '../../Atoms/MainButton/MainButton';
import contests from '../../Data/MongoDBMock/contests';
import { useNavigate } from 'react-router-dom';

// import propTypes from 'prop-types';

const Confirmation = () =>
  // {lipneID}
  {
    const navigate = useNavigate();

    const name = contests[1].competitionName;

    // const aaa=contests.find(()=>{contests.id===lipneID})
    return (
      <ConfirmationStyled>
        <div>
          <p>
            Dziękujemy za zapisanie się na
            <span>
              {' '}
              {name}
              {/* {aaa.competitionName} */}
            </span>
            Przyjęliśmy Twoje zgłoszenie.
          </p>
          <p>
            Jeśli dostaniesz się na listę uczestników otrzymasz od nas dane do
            wpłaty.
          </p>
          <p>W razie problemów lub pytań skontaktuj się z nami.</p>
        </div>

        <MainButton
          ternary
          text="Formularz kontaktowy"
          onClick={() => navigate('/contactForm')}
        />

        <MainButton
          secondary
          text="Wróć do menu głównego"
          onClick={() => navigate('/role')}
        />
      </ConfirmationStyled>
    );
  };
// Confirmation.propTypes = { text: propTypes.string };
export default Confirmation;
