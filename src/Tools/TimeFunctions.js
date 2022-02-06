import { TIME } from '../Consts/infoLabelConsts';

export const getDataFormatDdMonthYyy = (date) => {
  return date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const getDataFormatDdMmhYyy = (date) => {
  return date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};

export const getHourMinutesFormat = (date) => {
  return date.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getHourAndMinutesFromDate = (date = Date) => {
  const hour = date.getHours().toString();
  const minutes = date.getUTCMinutes().toString();
  if (minutes === '0') {
    return `${hour}:00`;
  }
  return `${hour}:${minutes}`;
};

export const getPointOnTimeLine = (startDate, endDate) => {
  const todayDate = new Date();
  if (endDate < todayDate) {
    return 'archiwalny';
  } else if (todayDate >= startDate && todayDate <= endDate) {
    return 'w trakcie';
  } else if (startDate > todayDate) {
    return 'nadchodzący';
  }
  return 'loading...';
};

export const getSelectedContestsByTime = (timePeriod, contests = []) => {
  let selectedcontests = [];

  if (timePeriod === TIME.UNKNOWN) {
    selectedcontests = contests;
  } else {
    contests.forEach((contest) => {
      const contestTimePeriod = getPointOnTimeLine(
        contest.startDate,
        contest.endDate,
      );
      if (contestTimePeriod === timePeriod) {
        selectedcontests.push(contest);
      }
    });
  }

  return selectedcontests;
};
