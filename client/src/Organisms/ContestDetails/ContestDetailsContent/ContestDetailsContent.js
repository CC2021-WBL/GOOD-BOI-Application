import ContestDetailsAddress from './ContestDetailsAddress/ContestDetailsAddress';
import ContestDetailsApplicationInfo from './ContestDetailsApplicationInfo/ContestDetailsApplicationInfo';
import ContestDetailsContentStyled from './ContestDetailsContentStyled';
import ContestDetailsDate from './ContestDetailsDate/ContestDetailsDate';
import ContestDetailsJudges from './ContestDetailsJudges/ContestDetailsJudges';
import PropTypes from 'prop-types';

const ContestDetailsContent = ({ contestData }) => {
  const { startDate } = contestData;
  const { address } = contestData;
  const { judges } = contestData;
  const { applicationOpenDate, applicationClosedDate, feePLN } = contestData;
  const applicationOpenDateFormat = new Date(applicationOpenDate);
  const applicationClosedDateFormat = new Date(applicationClosedDate);

  return (
    <ContestDetailsContentStyled>
      <ContestDetailsDate date={new Date(startDate)} />
      <ContestDetailsAddress addressInfo={address} />
      <ContestDetailsJudges judges={judges} />
      <ContestDetailsApplicationInfo
        applicationData={{
          applicationOpenDateFormat,
          applicationClosedDateFormat,
          feePLN,
        }}
      />
    </ContestDetailsContentStyled>
  );
};
ContestDetailsContent.propTypes = {
  contestData: PropTypes.object,
};

export default ContestDetailsContent;
