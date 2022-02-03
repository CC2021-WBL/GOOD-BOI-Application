import RANDOM_CONTESTS from '../Data/Dummy-data/test-data-random-contests';

const pathData = [
  { path: '/login', text: 'Logowanie', label: '' },
  { path: '/role', text: 'Wybierz rolę', label: 'Kontynuuj jako' },
  { path: '/register', text: 'Rejestracja', label: '' },
  { path: '/forgot', text: 'Resetuj hasło', label: '' },
  {
    path: '/contests',
    text: 'Lista konkursów',
    label: 'Wybierz konkurs',
  },

  {
    path: `/contests/${RANDOM_CONTESTS[0].id}/classes/Klasa 0`,
    text: 'Lista uczestników',
    label: 'Klasa 0',
  },
  {
    path: `/contests/${RANDOM_CONTESTS[0].id}/classes/Klasa 0/Woof`,
    text: 'Punktacja',
    label: 'Ocena zawodnika Woof',
  },

  {
    path: '/contests/closed',
    text: 'Lista konkursów',
    label: 'Wybierz konkurs',
  },
  { path: '/user', text: 'Twój profil', label: '' },
  { path: '/userDogs', text: 'Twoje psy', label: '' },
  { path: '/userContests', text: 'Konkursy', label: '' },
  {
    path: '/dogSubmit',
    text: 'Zgłoś psa',
    label: 'XV zjazd dobrych chłopaków',
  },
  { path: '/dogData', text: 'Dane psa', label: 'Woof' },
  {
    path: '/participantData',
    text: 'Dane zawodnika',
    label: 'Matylda Borutka',
  },
  { path: '/classChoice', text: 'Wybór klasy', label: 'Dostępne klasy' },
  {
    path: '/confirmation',
    text: 'Potwierdzenie zgłoszenia',
    label: 'Status zgłoszenia',
  },
  { path: '/addDogForm', text: 'Formularz', label: 'Dodaj psa' },
  { path: '/contactForm', text: 'Formularz kontaktowy', label: '' },
  { path: '/ErrorPage', text: 'Ups...', label: '' },
  { path: '/notFound', text: 'Strona nie istnieje', label: '' },
  { path: '/settings', text: 'Ustawienia', label: '' },
  { path: '/upcoming', text: 'Nadchodzące konkursy', label: '' },
  {
    path: '/contestDetails',
    text: 'Konkurs',
    label: 'XV zjazd dobrych chłopaków',
  },
  {
    path: '/contests/:contestId/classes/:classId/leaderboard',
    text: 'Leaderboard',
    label: 'wybrany contest',
  },
];

export default pathData;