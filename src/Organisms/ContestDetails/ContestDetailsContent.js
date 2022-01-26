import ContestDetailsContentStyled from './ContestDetailsContentStyled';
import ContestDetailsLine from './ContestDetailsLine';
import PropTypes from 'prop-types';
import {
  getDataFormatDdMmhYyy,
  getDataFormatDdMonthYyy,
  getHourMinutesFormat,
} from '../../Tools/TimeFunctions';

const ContestDetailsContent = ({ contestInfo }) => {
  /*DATE AND HOUR*/
  const { date } = contestInfo;
  let dateAndHourText = [];
  console.log(`${getHourMinutesFormat(date)}`);
  date &&
    (dateAndHourText = [
      `${getDataFormatDdMonthYyy(date)}`,
      `${getHourMinutesFormat(date)}`,
    ]);
  /*ADDRESS*/
  const { address, city, place } = contestInfo;
  let addressText = [];
  address && addressText.push(address);
  city && addressText.push(city);
  /*APPLICATION INFO*/
  const { applicationOpenDate, applicationClosedDate, applicationFeeInPLN } =
    contestInfo;
  const applicationOpenDateText = `${getDataFormatDdMmhYyy(
    applicationOpenDate,
  )}`;
  const applicationClosedDateText = `${getDataFormatDdMmhYyy(
    applicationClosedDate,
  )}`;
  const applicationFeeInPLNText = `${applicationFeeInPLN.toFixed(2)} PLN`;

  return (
    <ContestDetailsContentStyled>
      {date && <ContestDetailsLine text={dateAndHourText} />}
      {address && <ContestDetailsLine text={addressText} />}
      {place && <ContestDetailsLine text={place} />}
      {/*PLACE*/}
      {/*<ContestDetailsLine text={['UL. GRUNWALDZKA 402', 'GDAŃSK']} />*/}
      <ContestDetailsLine text={['OLIVIA BUSINESS CENTER']} />
      {/*JUDGES*/}
      <ContestDetailsLine text={['SKŁAD SĘDZIOWSKI:']} />
      <ContestDetailsLine text={['skład nieznany']} judge={true} />
      <ContestDetailsLine text={['NATASZA URBAŃSKA']} judge={true} />
      <ContestDetailsLine text={['MICHAŁ MILOWICZ']} judge={true} />
      {/*APPLICATION INFO*/}
      <ContestDetailsLine
        text={['OTWARCIE ZGŁOSZEŃ', applicationOpenDateText]}
        highlight={true}
      />
      <ContestDetailsLine
        text={['ZGŁOSZENIA DO', applicationClosedDateText]}
        highlight={true}
      />
      <ContestDetailsLine
        text={['OPŁATA WPISOWA', applicationFeeInPLNText]}
        highlight={true}
      />
    </ContestDetailsContentStyled>
  );
};
ContestDetailsContent.propTypes = {
  contestInfo: PropTypes.object,
};

export default ContestDetailsContent;
