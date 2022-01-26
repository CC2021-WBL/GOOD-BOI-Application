import ContestDetails from '../../Organisms/ContestDetails/ContestDetails';
const testContestId = 'a0347677-c3c9-4edc-9d46-fed4a958fdc2';
const testContestId2 = 'jajo-test-jajo';

const ContestDetailsPage = () => {
  return (
    <>
      <ContestDetails contestId={testContestId} />
      <ContestDetails contestId={testContestId2} />
    </>
  );
};

export default ContestDetailsPage;
