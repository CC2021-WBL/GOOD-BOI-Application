import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import contests from '../../Data/MongoDBMock/contests';

const ContestsPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
      {contests.map((contest) => (
        <ContestCard key={contest.contestId} contestId={contest.contestId} />
      ))}
    </ColumnWrapper>
  );
};

export default ContestsPage;
