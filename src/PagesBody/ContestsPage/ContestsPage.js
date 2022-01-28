import ContestComponent from '../../Molecules/ContestComponent/contestComponent';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const ContestsPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <h1>LISTA KONKURSÓW</h1>
      <h2>WYBIERZ KONKURS</h2>
      <ContestComponent contestId={RANDOM_CONTESTS[0].id} contestIndex={0} />
    </ColumnWrapper>
  );
};

export default ContestsPage;
