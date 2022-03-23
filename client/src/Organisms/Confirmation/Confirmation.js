import ConfirmationStyled from './ConfirmationStyled';
import { ContestContext } from '../../Context/ContestContext';
import MainButton from '../../Atoms/MainButton/MainButton';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../Context/UserDataContext';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import EnterCompetitionContainer from '../EnterCompetitionContainer/EnterCompetitionContainer';

const Confirmation = () => {
  const navigate = useNavigate();
  const { contestState } = useContext(ContestContext);
  const { state } = useContext(UserDataContext);

  const enterCompetitionConfirmation = () => {
    return state.selectedClass !== null ? '-enter-competition' : '';
  };

  return (
    <ColumnWrapper className={`confirmation${enterCompetitionConfirmation()}`}>
      <ColumnWrapper
        className={`confirmation-container${enterCompetitionConfirmation()}`}
      >
        <ConfirmationStyled>
          <div>
            <p>
              Dziękujemy za zapisanie się na
              <span> {contestState.contestName}</span>. Przyjęliśmy Twoje
              zgłoszenie.
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
            onClick={() => navigate('/contact-form')}
          />

          <MainButton
            secondary
            text="Wróć do menu głównego"
            onClick={() => navigate('/role')}
          />
        </ConfirmationStyled>
      </ColumnWrapper>
      {state.selectedClass !== null && <EnterCompetitionContainer />}
    </ColumnWrapper>
  );
};
export default Confirmation;
