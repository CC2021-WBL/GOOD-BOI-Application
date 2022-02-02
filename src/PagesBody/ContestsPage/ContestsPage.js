import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import { useUserContext } from '../../Context/DataContext';

const ContestsPage = () => {
  const userData = useUserContext();
  console.log(userData);

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
      <ContestCard contestId={RANDOM_CONTESTS[0].id} contestIndex={0} />
      <ContestCard contestId={RANDOM_CONTESTS[1].id} contestIndex={1} />
    </ColumnWrapper>
  );
};

export default ContestsPage;
