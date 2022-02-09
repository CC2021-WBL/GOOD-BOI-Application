import {
  getDataFormatDdMonthYyy,
  getHourMinutesFormat,
} from '../TimeFunctions';
import toBeAnnounced from '../../Consts/toBeAnnounced';

const renderDateAndHourText = (date) => {
  return [
    `${
      date instanceof Date
        ? getDataFormatDdMonthYyy(date)
        : `Data: ${toBeAnnounced}`
    }`,
    `${
      date instanceof Date && getHourMinutesFormat(date) !== '00:00'
        ? getHourMinutesFormat(date)
        : `Godzina: ${toBeAnnounced}`
    }`,
  ];
};

export default renderDateAndHourText;
