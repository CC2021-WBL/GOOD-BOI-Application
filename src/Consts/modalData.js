import COLORS from '../Styles/varsStyledComponents';

const modalData = {
  penalty: {
    title: '10 PUNKTÓW KARNYCH',
    about: ' Kliknięcie spowoduje przyznanie 10 punktów karnych.',
    confirmation: 'CZY JESTEŚ PEWIEN?',
    back: 'odrzuć punkty karne, wróć do oceniania',
    theme: {
      background: `${COLORS.warning100}`,
      color: `${COLORS.warning600}`,
    },
  },
  disqualify: {
    title: 'POTWIERDŹ DYSKWALIFIKACJĘ',
    about: 'Kliknięcie spowoduje usunięcie zawodnika z konkursu. ',
    confirmation: 'CZY JESTEŚ PEWIEN?',
    back: 'odrzuć dyskwalifikację, wróć do oceniania',
    theme: {
      background: `${COLORS.negative100}`,
      color: `${COLORS.negative600}`,
    },
  },
  endEvaluation: {
    title: 'ZAKOŃCZ OCENIANIE',
    about: 'Kliknięcie spowoduje zamkniecie formularza oceny zawodnika.',
    confirmation: 'CZY POTWIERDZASZ?',
    back: 'wróć do formularza oceny',
    theme: {
      background: `${COLORS.primary101}`,
      color: `${COLORS.primary601}`,
    },
  },
  endContest: {
    title: 'ZAKOŃCZ KONKURS',
    about: 'Kliknięcie spowoduje zamkniecie wszystkich formularzy zawodników',
    confirmation: 'CZY POTWIERDZASZ?',
    back: 'wróć do formularza oceny',
    theme: {
      background: `${COLORS.primary101}`,
      color: `${COLORS.primary601}`,
    },
  },

  goodRegistration: {
    title: 'Rejestracja udana.',
    about: 'Cieszymy się, że z nami jesteś!',
    confirmation: 'KLIKNIJ TU, ŻEBY SIĘ ZALOGOWAĆ.',
    back: 'wróć do strony głównej',
    theme: {
      background: `${COLORS.positive100}`,
      color: `${COLORS.positive600}`,
    },
  },

  badRegistration: {
    title: 'Rejestracja nieudana',
    about: 'Coś poszło nie tak.',
    confirmation: 'SPRÓBUJ PONOWNIE PÓŹNIEJ',
    back: 'Wróć do formularza rejestacji ',
    theme: {
      background: `${COLORS.negative100}`,
      color: `${COLORS.negative600}`,
    },
  },
};

export default modalData;
