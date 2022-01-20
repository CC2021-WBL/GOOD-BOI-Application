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
  evaluate: {
    title: 'ZAKOŃCZ OCENIANIE',
    about: 'Kliknięcie = zamknięcie formularza i wyświetlenie podsumowania ',
    back: 'wróć do formularza oceny',
    theme: {
      background: `${COLORS.primary101}`,
      color: `${COLORS.primary601}`,
    },
  },
  end: {
    title: 'ZAKOŃCZ KONKURS',
    about: 'Kliknięcie spowoduje ZAMKNIĘCIE KONKURSU',
    back: 'wróć do formularza oceny',
    theme: {
      background: `${COLORS.primary101}`,
      color: `${COLORS.primary601}`,
    },
  },

  goodRegistration: {
    title: 'Rejestracja udana. Kliknij tu, żeby się zalogować',
    back: 'wróć do strony głównej',
    theme: {
      background: `${COLORS.positive100}`,
      color: `${COLORS.positive600}`,
    },
  },

  badRegistration: {
    title: 'Rejestracja nieudana',
    back: 'Wróć do formularza rejestacji ',
    theme: {
      background: `${COLORS.negative100}`,
      color: `${COLORS.negative600}`,
    },
  },
};

export default modalData;
