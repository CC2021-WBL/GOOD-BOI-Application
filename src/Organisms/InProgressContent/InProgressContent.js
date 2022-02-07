import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import InProgressContentWrapperStyled from './InProgressContentWrapperStyled';
import inprogress from '../../Assets/inprogress.png';

const InProgressContent = () => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <InProgressContentWrapperStyled>
        <img src={inprogress} alt="in progress" />
        <div>
          <h3>Strona w trakcie przygotowania!</h3>
          <p>Strona dostępna wkrótce!</p>
        </div>
        <FakeButton
          secondary="secondary"
          text="Powrót do strony głównej"
          to="/login"
        />
      </InProgressContentWrapperStyled>
    </ColumnWrapper>
  );
};

export default InProgressContent;
