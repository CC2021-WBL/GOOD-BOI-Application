import { getDataFormatDdMmhYyy } from './TimeFunctions';

const renderDogData = (dogData) => {
  const noDataText = 'brak danych';

  const {
    dogName = noDataText,
    kennelName = noDataText,
    breed = noDataText,
    sex = noDataText,
    color = noDataText,
    dateOfBirth = noDataText,
    pkr = noDataText,
    registrationNumber = noDataText,
    chipOrTattoo = noDataText,
  } = dogData;

  return {
    ['Imię rodowodowe']: dogName,
    ['Przydomek']: kennelName,
    ['Pełna rasa psa/suki']: breed,
    ['Płeć']: sex,
    ['Maść']: color,
    ['Data urodzenia']: `${
      dateOfBirth.toString().length > 4
        ? getDataFormatDdMmhYyy(dateOfBirth)
        : noDataText
    }`,
    ['Numer PKR']: pkr,
    ['Numer rejestracji oddziałowej']: registrationNumber,
    ['Numer tatuażu/chipu']: chipOrTattoo,
  };
};

export default renderDogData;
