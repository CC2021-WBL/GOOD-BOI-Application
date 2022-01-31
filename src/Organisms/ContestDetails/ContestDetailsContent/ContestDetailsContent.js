import ContestDetailsContentStyled from './ContestDetailsContentStyled';
import PropTypes from 'prop-types';

import ContestDetailsDate from './ContestDetailsDate/ContestDetailsDate';
import ContestDetailsAddress from './ContestDetailsAddress/ContestDetailsAddress';
import ContestDetailsJudges from './ContestDetailsJudges/ContestDetailsJudges';
import ContestDetailsApplicationInfo from './ContestDetailsApplicationInfo/ContestDetailsApplicationInfo';

const ContestDetailsContent = ({ contestInfo }) => {
  const { date } = contestInfo;
  const { address, city, place } = contestInfo;
  const { judges } = contestInfo;
  const { applicationOpenDate, applicationClosedDate, applicationFeeInPLN } =
    contestInfo;

  return (
    <ContestDetailsContentStyled>
      <ContestDetailsDate date={date} />
      <ContestDetailsAddress addressInfo={{ address, city, place }} />
      <ContestDetailsJudges judges={judges} />
      <ContestDetailsApplicationInfo
        applicationInfo={{
          applicationOpenDate,
          applicationClosedDate,
          applicationFeeInPLN,
        }}
      />
    </ContestDetailsContentStyled>
  );
};
ContestDetailsContent.propTypes = {
  contestInfo: PropTypes.object,
};

export default ContestDetailsContent;
