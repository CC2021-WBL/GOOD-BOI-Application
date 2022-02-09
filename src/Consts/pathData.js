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
    path: 'role/contest/1/class/1/Woof/dogSummary',
    text: 'Tabela wyników',
    label: 'Ocena zawodnika Woof',
  },
  {
    path: '/contests/closed',
    text: 'Lista konkursów',
    label: 'Wybierz konkurs',
  },
  {
    path: '/role/contest/1/class/1/classSummary',
    text: 'Wyniki w klasie',
    label: 'Wyniki w klasie 1',
  },
  { path: '/user', text: 'Twój profil', label: '' },
  { path: '/user-dogs', text: 'Twoje psy', label: 'Lista twoich psów' },
  { path: '/user-contests', text: 'Konkursy', label: '' },
  {
    path: '/dog-submit',
    text: 'Zgłoś psa',
    label: 'XV zjazd dobrych chłopaków',
  },
  { path: '/dog-data', text: 'Dane psa', label: 'Woof' },
  {
    path: '/participant-data',
    text: 'Dane zawodnika',
    label: 'Matylda Borutka',
  },
  { path: '/class-choice', text: 'Wybór klasy', label: 'Dostępne klasy' },
  {
    path: '/confirmation',
    text: 'Potwierdzenie zgłoszenia',
    label: 'Status zgłoszenia',
  },
  { path: '/add-dog-form', text: 'Formularz', label: 'Dodaj psa' },
  { path: '/contact-form', text: 'Formularz kontaktowy', label: '' },
  { path: '/not-found', text: 'Strona nie istnieje', label: '' },
  { path: '/settings', text: 'Ustawienia', label: '' },
  { path: '/upcoming', text: 'Nadchodzące konkursy', label: '' },
  {
    path: '/contest-details',
    text: 'Konkurs',
    label: 'XV zjazd dobrych chłopaków',
  },
  {
    path: '/in-progress',
    text: 'Ups...',
    label: '',
  },
];

export default pathData;
