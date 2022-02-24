import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';

//context isAuthentic userData
const ManagerPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <FakeButton colors="ternary" text="Dodaj nowe zawody" to="/" />
      <FakeButton colors="ternary" text="Zaplanowane zawody" to="/" />
      <FakeButton colors="ternary" text="Twoje archiwalne zawody" to="/" />
    </ColumnWrapper>
  );
};

export default ManagerPage;
