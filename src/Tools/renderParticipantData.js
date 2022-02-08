const renderParticipantData = (participantData) => {
  const noDataText = 'brak danych';

  const {
    email = noDataText,
    phoneNumber = noDataText,
    participantName = noDataText,
    participantSurname = noDataText,
    address,
  } = participantData;

  const {
    country = noDataText,
    city = noDataText,
    street = noDataText,
    numberOfHouse = noDataText,
    postalCode = noDataText,
  } = address;

  return {
    ['Imię']: participantName,
    ['Nazwisko']: participantSurname,
    ['E-mail']: email,
    ['Numer telefonu']: phoneNumber,
    ['Adres']: `${street} ${numberOfHouse}`,
    ['Miasto']: `${postalCode} ${city}`,
    ['Kraj']: country,
  };
};

export default renderParticipantData;
