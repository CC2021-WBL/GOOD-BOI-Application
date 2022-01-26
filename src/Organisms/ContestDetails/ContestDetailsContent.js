import ContestDetailsContentStyled from './ContestDetailsContentStyled';
import ContestDetailsLine from './ContestDetailsLine';
import PropTypes from 'prop-types';
import {
  getDataFormatDdMmhYyy,
  getDataFormatDdMonthYyy,
  getHourMinutesFormat,
} from '../../Tools/TimeFunctions';

const ContestDetailsContent = ({ contestInfo }) => {
  const toBeAnnounced = 'TBA';

  /*DATE AND HOUR*/
  const { date } = contestInfo;
  let dateAndHourText = [`Data: ${toBeAnnounced}`, `Godzina: ${toBeAnnounced}`];
  date && (dateAndHourText[0] = `${getDataFormatDdMonthYyy(date)}`);
  date &&
    getHourMinutesFormat(date) !== '00:00' &&
    (dateAndHourText[1] = `${getHourMinutesFormat(date)}`);

  /*ADDRESS*/
  const { address, city, place } = contestInfo;
  let addressText = [`Adres: ${toBeAnnounced}`, `Miasto: ${toBeAnnounced}`];
  address && (addressText[0] = address);
  city && (addressText[0] = city);

  /*JUDGES*/
  const { judges = [] } = contestInfo;
  judges.length === 0 && judges.push(toBeAnnounced);

  /*APPLICATION INFO*/
  const { applicationOpenDate, applicationClosedDate, applicationFeeInPLN } =
    contestInfo;
  const applicationInfo = [
    ['Otwarcie zgłoszeń', toBeAnnounced],
    ['Zgłoszenia do', toBeAnnounced],
    ['Opłata wpisowa', toBeAnnounced],
  ];

  applicationOpenDate &&
    (applicationInfo[0][1] = `${getDataFormatDdMmhYyy(applicationOpenDate)}`);
  applicationClosedDate &&
    (applicationInfo[1][1] = `${getDataFormatDdMmhYyy(applicationClosedDate)}`);
  applicationFeeInPLN &&
    (applicationInfo[2][1] = `${applicationFeeInPLN.toFixed(2)} PLN`);

  return (
    <ContestDetailsContentStyled>
      <ContestDetailsLine text={dateAndHourText} />
      <ContestDetailsLine text={addressText} />
      {place && <ContestDetailsLine text={place} />}
      <ContestDetailsLine text={'Skład sędziowski:'} />
      {judges.map((judge, index) => (
        <ContestDetailsLine key={`judge-${index}`} text={judge} judge={true} />
      ))}
      {applicationInfo.map((judge, index) => (
        <ContestDetailsLine
          key={`application-${index}`}
          text={judge}
          highlight={true}
        />
      ))}
    </ContestDetailsContentStyled>
  );
};
ContestDetailsContent.propTypes = {
  contestInfo: PropTypes.object,
};

export default ContestDetailsContent;
