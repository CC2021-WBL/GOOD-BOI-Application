import { getDataFormatDdMmhYyy } from '../TimeFunctions';
import pricePLN from '../pricePLN';
import toBeAnnounced from '../../Consts/toBeAnnounced';

const applicationInfoRender = (applicationInfo) => {
  const {
    applicationOpenDate = toBeAnnounced,
    applicationClosedDate = toBeAnnounced,
    feePLN = toBeAnnounced,
  } = applicationInfo;

  return [
    [
      'Otwarcie zgłoszeń',
      `${
        applicationOpenDate instanceof Date
          ? getDataFormatDdMmhYyy(applicationOpenDate)
          : toBeAnnounced
      }`,
    ],
    [
      'Zgłoszenia do',
      `${
        applicationClosedDate instanceof Date
          ? getDataFormatDdMmhYyy(applicationClosedDate)
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
