import ContestDetailsLine from '../../../../Atoms/ContestDetailsLine/ContestDetailsLine';
import PropTypes from 'prop-types';
import { getDataFormatDdMmhYyy } from '../../../../Tools/TimeFunctions';
import { applicationInfoTextTemplate } from '../../../../Consts/ContestDetailsCONSTS';

const ContestDetailsApplicationInfo = ({ applicationInfo }) => {
  const { applicationOpenDate, applicationClosedDate, applicationFeeInPLN } =
    applicationInfo;

  const applicationInfoText = applicationInfoTextTemplate;

  applicationOpenDate &&
    (applicationInfoText[0][1] = `${getDataFormatDdMmhYyy(
      applicationOpenDate,
    )}`);
  applicationClosedDate &&
    (applicationInfoText[1][1] = `${getDataFormatDdMmhYyy(
      applicationClosedDate,
    )}`);
  applicationFeeInPLN &&
    (applicationInfoText[2][1] = `${applicationFeeInPLN.toFixed(2)} PLN`);

  return (
    <>
      {applicationInfoText.map((applicationInfoLine, index) => (
        <ContestDetailsLine
          key={`application-${index}`}
          text={applicationInfoLine}
          highlight={true}
        />
      ))}
    </>
  );
};

ContestDetailsApplicationInfo.propTypes = {
  applicationInfo: PropTypes.shape({
    applicationOpenDate: PropTypes.instanceOf(Date),
    applicationClosedDate: PropTypes.instanceOf(Date),
    applicationFeeInPLN: PropTypes.number,
  }),
};

export default ContestDetailsApplicationInfo;
