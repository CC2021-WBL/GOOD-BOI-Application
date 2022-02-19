const modalData = {
  penalty: {
    title: '10 PUNKTÓW KARNYCH',
    about: ' Kliknięcie spowoduje przyznanie 10 punktów karnych.',
    confirmation: 'CZY JESTEŚ PEWIEN?',
    back: 'odrzuć punkty karne, wróć do oceniania',
    colors: {
      background: `modalPenaltyBG`,
      color: `modalPenaltyC`,
    },
  },
  disqualify: {
    title: 'POTWIERDŹ DYSKWALIFIKACJĘ',
    about: 'Kliknięcie spowoduje usunięcie zawodnika z konkursu. ',
    confirmation: 'CZY JESTEŚ PEWIEN?',
    back: 'odrzuć dyskwalifikację, wróć do oceniania',
    colors: {
      background: `modalDisqualifyBG`,
      color: `modalDisqualifyC`,
    },
  },
  endEvaluation: {
    title: 'ZAKOŃCZ OCENIANIE',
    about: 'Kliknięcie spowoduje zamkniecie formularza oceny zawodnika.',
    confirmation: 'CZY POTWIERDZASZ?',
    back: 'wróć do formularza oceny',
    colors: {
      background: `modalEndEvaluationBG`,
      color: `modalEndEvaluationC`,
    },
  },
  endContest: {
    title: 'ZAKOŃCZ KONKURS',
    about: 'Kliknięcie spowoduje zamkniecie wszystkich formularzy zawodników',
    confirmation: 'CZY POTWIERDZASZ?',
    back: 'wróć do formularza oceny',
    colors: {
      background: `modalEndContestBG`,
      color: `modalEndContestC`,
    },
  },

  goodRegistration: {
    title: 'Rejestracja udana.',
    about: 'Cieszymy się, że z nami jesteś!',
    confirmation: 'KLIKNIJ TU, ŻEBY SIĘ ZALOGOWAĆ.',
    back: 'wróć do strony głównej',
    colors: {
      background: `modalGoodRegistrationBG`,
      color: `modalGoodRegistrationC`,
    },
  },

  badRegistration: {
    title: 'Rejestracja nieudana',
    about: 'Coś poszło nie tak.',
    confirmation: 'SPRÓBUJ PONOWNIE PÓŹNIEJ',
    back: 'Wróć do formularza rejestacji ',
    colors: {
      background: `modalBadRegistrationBG`,
      color: `modalBadRegistrationC`,
    },
  },
  passReminder: {
    title: 'Przypomnienie wysłane',
    about: 'Sprawdź folder spam w swojej skrzynce pocztowej',
    confirmation: '',
    back: ' WRÓĆ DO STRONY LOGOWANIA',
    colors: {
      background: `modalGoodRegistrationBG`,
      color: `modalGoodRegistrationC`,
    },
  },
};

export default modalData;
