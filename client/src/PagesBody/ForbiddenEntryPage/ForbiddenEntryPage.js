import FakeButton from '../../Atoms/FakeButton/FakeButton';
import ForbiddenWrapperStyled from './ForbiddenEntryStyled';
import notFound from '../../Assets/notFound.png';

const ForbiddenEntryPage = () => {
  return (
    <ForbiddenWrapperStyled>
      <img src={notFound} alt="Dog with question mark" />
      <h1>Nie masz uprawnień żeby wejść na tę stronę</h1>
      <FakeButton text="Przejdź na stronę logowania" ternary to="/login" />
    </ForbiddenWrapperStyled>
  );
};

export default ForbiddenEntryPage;
