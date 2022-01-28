import ContestDetailsLine from '../../../../Atoms/ContestDetailsLine/ContestDetailsLine';
import PropTypes from 'prop-types';
import {
  getDataFormatDdMonthYyy,
  getHourMinutesFormat,
} from '../../../../Tools/TimeFunctions';
import { dateAndHourTextTemplate } from '../../../../Consts/ContestDetailsCONSTS';

const ContestDetailsDate = ({ date }) => {
  const dateAndHourText = dateAndHourTextTemplate;
  date && (dateAndHourText[0] = `${getDataFormatDdMonthYyy(date)}`);
  date &&
    getHourMinutesFormat(date) !== '00:00' &&
    (dateAndHourText[1] = `${getHourMinutesFormat(date)}`);

  return <ContestDetailsLine text={dateAndHourText} />;
};

ContestDetailsDate.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default ContestDetailsDate;
