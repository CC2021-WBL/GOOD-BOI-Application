import { getDataFormatDdMmhYyy } from '../TimeFunctions';
import pricePLN from '../pricePLN';
import toBeAnnounced from '../../Consts/toBeAnnounced';

const applicationInfoRender = (applicationInfo) => {
  const {
    applicationOpenDateFormat = toBeAnnounced,
    applicationClosedDateFormat = toBeAnnounced,
    feePLN = toBeAnnounced,
  } = applicationInfo;

  return [
    [
      'Otwarcie zgłoszeń',
      `${
        applicationOpenDateFormat instanceof Date
          ? getDataFormatDdMmhYyy(applicationOpenDateFormat)
          : toBeAnnounced
      }`,
    ],
    [
      'Zgłoszenia do',
      `${
        applicationClosedDateFormat instanceof Date
          ? getDataFormatDdMmhYyy(applicationClosedDateFormat)
          : toBeAnnounced
      }`,
    ],
    [
      'Opłata wpisowa',
      `${typeof feePLN === 'number' ? pricePLN(feePLN) : toBeAnnounced}`,
    ],
  ];
};

export default applicationInfoRender;
