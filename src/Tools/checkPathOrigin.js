export const checkPathOrigin = (url, namesFromContext = {}) => {
  const { userName, userSurname, dogName, contestName } = namesFromContext;
  const pathOrigin = url.split('/');
  const pathPattern = {};
  let endData = '';
  for (let index = 0; index < pathOrigin.length; index++) {
    const string = pathOrigin[index];

    let data = {};
    switch (string) {
      case 'contests':
        if (Object.prototype.hasOwnProperty.call(pathPattern, 'contests')) {
          pathPattern.contests++;
        } else {
          pathPattern.contests = 1;
        }
        break;
      case 'classes':
        if (Object.prototype.hasOwnProperty.call(pathPattern, 'classes')) {
          pathPattern.classes++;
        } else {
          pathPattern.classes = 1;
        }
        break;
      case 'user':
        if (Object.prototype.hasOwnProperty.call(pathPattern, 'user')) {
          pathPattern.user++;
        } else {
          pathPattern.user = 1;
        }
        break;
      case 'login':
        data = { text: 'Logowanie', label: '' };
        break;
      case 'doggos':
        data = { text: 'Twoje psy', label: '' };
        break;
      case 'role':
        data = { text: 'Wybierz rolę', label: 'Kontynuuj jako' };
        break;
      case 'register':
        data = { text: 'Rejestracja', label: '' };
        break;
      case 'forgot':
        data = { text: 'Resetuj hasło', label: '' };
        break;
      case 'user-data':
        data = { text: 'Dane Konta', label: '' };
        break;
      case 'user-dogs':
        data = { text: 'Twoje Psy', label: 'Lista Twoich psów' };
        break;
      case 'settings':
        data = { text: 'Ustawienia', label: '' };
        break;
      case 'contact-form':
        data = { text: 'Formularz kontaktowy', label: '' };
        break;
      case 'unregistered':
        data = { text: 'Portal Good Boy', label: '' };
        break;
      case 'in-progress':
        data = { text: 'Robi się', label: '' };
        break;
      case 'contest':
        data = { text: 'Konkurs', label: `${contestName}` };
        break;
      case 'summary':
        data = {
          text: 'Wyniki w klasie',
          label: `Klasa ${pathOrigin[5]}`,
        };
        break;
      case 'closed':
        data = {
          text: 'Lista konkursów',
          label: `Zakończone`,
        };
        break;
      case 'dog-submit':
        data = { text: 'Zgłoś Psa', label: `${contestName}` };
        break;
      case 'dog-data':
        data = { text: 'Dane Psa', label: `${dogName}` };
        break;
      case 'participant-data':
        data = {
          text: 'Dane zawodnika',
          label: `${userName} ${userSurname}`,
        };
        break;
      case 'confirmation':
        data = { text: 'Potwierdzenie', label: 'Status zgłoszenia' };
        break;
      case 'add-dog-form':
        data = { text: 'Formularz', label: 'Dodaj Psa' };
        break;
      case 'class-choice':
        data = { text: 'Wybór klasy', label: 'Dostępne klasy' };
        break;
      case 'dog-summary':
        data = { text: 'Punktacja', label: `Ocena zawodnika ${dogName}` };
        break;
      case 'confirmation-summary':
        data = {
          text: 'Twoje zgłoszenie',
          label: `${contestName}`,
        };
        break;
      default:
        if (Object.prototype.hasOwnProperty.call(pathPattern, 'ids')) {
          pathPattern.ids++;
        } else {
          pathPattern.ids = 1;
        }
    }
    if (Object.keys(data).length !== 0) {
      endData = data;
      break;
    }
  }
  if (Object.keys(endData).length !== 0) {
    return endData;
  }

  const arrayLength = pathOrigin.length;
  if (
    Object.prototype.hasOwnProperty.call(pathPattern, 'contests') &&
    arrayLength === 2
  ) {
    return { text: 'Lista konkursów', label: 'Wybierz konkurs' };
  } else if (
    Object.prototype.hasOwnProperty.call(pathPattern, 'contests') &&
    arrayLength === 3
  ) {
    return { text: 'Konkurs', label: `${contestName}` };
  } else if (
    Object.prototype.hasOwnProperty.call(pathPattern, 'contests') &&
    Object.prototype.hasOwnProperty.call(pathPattern, 'classes') &&
    arrayLength === 5
  ) {
    console.log(pathOrigin);
    return {
      text: 'Lista uczestników',
      label: `Klasa ${pathOrigin[4]}`,
    };
  } else if (
    Object.prototype.hasOwnProperty.call(pathPattern, 'contests') &&
    Object.prototype.hasOwnProperty.call(pathPattern, 'classes') &&
    arrayLength === 6
  ) {
    console.log(pathOrigin);
    return {
      text: 'Punktacja',
      label: `Ocena zawodnika ${dogName}`,
    };
  } else if (
    Object.prototype.hasOwnProperty.call(pathPattern, 'contests') &&
    Object.prototype.hasOwnProperty.call(pathPattern, 'classes') &&
    arrayLength === 4
  ) {
    return { text: 'Lista klas', label: `${contestName}` };
  } else if (
    Object.prototype.hasOwnProperty.call(pathPattern, 'user') &&
    arrayLength === 3
  ) {
    return { text: 'Twój profil', label: '' };
  }

  return 'Strona nie istnieje';
};
