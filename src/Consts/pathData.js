import RANDOM_CONTESTS from '../Data/Dummy-data/test-data-random-contests';

const pathData = [
  { path: '/login', text: 'Logowanie' },
  { path: '/role', text: 'Wybierz rolę', label: 'Kontynuuj jako' },
  { path: '/register', text: 'Rejestracja' },
  { path: '/forgot', text: 'Resetuj hasło' },
  {
    path: '/contests',
    text: 'Lista konkursów',
    label: 'Wybierz konkurs',
  },
  {
    path: `/contests/${RANDOM_CONTESTS[0].id}/classes`,
    text: 'Lista klas',
    label: `${RANDOM_CONTESTS[0].name}`,
  },
  {
    path: `/contests/${RANDOM_CONTESTS[1].id}/classes`,
    text: 'Lista klas',
    label: `${RANDOM_CONTESTS[1].name}`,
  },

  {
    path: 'role/contest/1/class/1',
    text: 'Lista uczestników',
    label: 'Klasa 1',
  },
  {
    path: 'role/contest/1/class/1/Woof',
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
  { path: '/userDogs', text: 'Twoje psy' },
  { path: '/userContests', text: 'Konkursy' },
  { path: '/dogSubmit', text: 'Zgłoś psa' },
  { path: '/dogData', text: 'Dane psa' },
  { path: '/participantData', text: 'Dane zawodnika' },
  { path: '/classChoice', text: 'Wybór klasy', label: 'Dostępne klasy' },
  {
    path: '/confirmation',
    text: 'Potwierdzenie zgłoszenia',
    label: 'Status zgłoszenia',
  },
  { path: '/addDogForm', text: 'Formularz', label: 'Dodaj psa' },
];

export default pathData;
