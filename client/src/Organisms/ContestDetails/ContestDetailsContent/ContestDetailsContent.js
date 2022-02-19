import PropTypes from 'prop-types';
import ContestDetailsContentStyled from './ContestDetailsContentStyled';

import ContestDetailsDate from './ContestDetailsDate/ContestDetailsDate';
import ContestDetailsAddress from './ContestDetailsAddress/ContestDetailsAddress';
import ContestDetailsJudges from './ContestDetailsJudges/ContestDetailsJudges';
import ContestDetailsApplicationInfo from './ContestDetailsApplicationInfo/ContestDetailsApplicationInfo';

const ContestDetailsContent = ({ contestData }) => {
  const { startDate } = contestData;
  const { address } = contestData;
  const { judges } = contestData;
  const { applicationOpenDate, applicationClosedDate, feePLN } = contestData;

  return (
    <ContestDetailsContentStyled>
      <ContestDetailsDate date={startDate} />
      <ContestDetailsAddress addressInfo={address} />
      <ContestDetailsJudges judges={judges} />
      <ContestDetailsApplicationInfo
        applicationData={{
          applicationOpenDate,
          applicationClosedDate,
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
