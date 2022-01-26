import ContestDetailsContentStyled from './ContestDetailsContentStyled';
import PropTypes from 'prop-types';

import ContestDetailsDate from './ContestDetailsContent/ContestDetailsDate';
import ContestDetailsAddress from './ContestDetailsContent/ContestDetailsAddress';
import ContestDetailsJudges from './ContestDetailsContent/ContestDetailsJudges';
import ContestDetailsApplicationInfo from './ContestDetailsContent/ContestDetailsApplicationInfo';

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
