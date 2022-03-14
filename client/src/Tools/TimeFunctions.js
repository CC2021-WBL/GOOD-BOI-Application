import { TIME } from '../Consts/infoLabelConsts';

export const getDataFormatDdMonthYyy = (date = Date) => {
  const convertedDate = new Date(date);
  return convertedDate.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const getDataFormatDdMmhYyy = (date) => {
  const convertedDate = new Date(date);
  return convertedDate.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};

export const getHourMinutesFormat = (date) => {
  const convertedDate = new Date(date);
  return convertedDate.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getHourAndMinutesFromDate = (date = Date) => {
  const convertedDate = new Date(date);
  const hour = convertedDate.getHours().toString();
  const minutes = convertedDate.getUTCMinutes().toString();
  if (minutes === '0') {
    return `${hour}:00`;
  }
  return `${hour}:${minutes}`;
};

export const getPointOnTimeLine = (contestStartDate, contestEndDate) => {
  const startDate = new Date(contestStartDate);
  const endDate = new Date(contestEndDate);
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

  if (contests === null) {
    return null;
  } else if (timePeriod === TIME.UNKNOWN) {
    selectedcontests = contests;
  } else if (timePeriod === TIME.PRESENT_AND_PAST) {
    contests.forEach((contest) => {
      const contestTimePeriod = getPointOnTimeLine(
        contest.startDate,
        contest.endDate,
      );
      if (
        contestTimePeriod === 'w trakcie' ||
        contestTimePeriod === 'archiwalny'
      ) {
        selectedcontests.push(contest);
      }
    });
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

export const toDateFormat = (date) => {
  return new Date(date);
};
