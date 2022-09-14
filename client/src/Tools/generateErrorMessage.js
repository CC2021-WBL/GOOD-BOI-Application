export const generateErrorMessage = (responseStatus) => {
  switch (responseStatus) {
    case 400:
      return 'Ojej! Niepoprawne żądanie. Spróbuj ponownie później.';
    case 401:
      return 'Ojej! Nie jesteśmy pewni kim jesteś. Spróbuj zalogować się ponownie.';
    case 403:
      return 'Ojej! Nie masz uprawnień do tej części serwisu.';
    case 404:
      return 'Ojej! Nie udało się znaleźć potrzebnych danych. Spróbuj jeszcze raz.';
    case 500:
      return 'Ojej! Nasz serwer przechodzi przez pewien etap. Daj mu czas i spróbuj ponownie później.';
    case 503:
      return 'Ojej! Usługa jest niedostępna. Skontaktuj się z nami.';
    default:
      return 'Ojej! Coś poszło nie tak. Spróbuj ponownie później.';
  }
};
