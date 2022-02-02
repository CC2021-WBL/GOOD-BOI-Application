const CLASSES = [
  {
    name: 'Klasa 0',
    pointsToGain: 140,
    exercises: [
      {
        exerciseName: 'Socjalizacja',
        pointsFactor: null,
        isRequiredToCompleteClass: true,
      },
      {
        exerciseName: 'Waruj/Siad przez 1 minutę',
        pointsFactor: 1,
      },
      {
        exerciseName: 'Chodzenie przy nodze',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Próba trzymania aportu',
        pointsFactor: 2,
      },
      {
        exerciseName: 'Przywołanie',
        pointsFactor: 2,
      },
      {
        exerciseName: 'Obieganie 3 pachołków z przywołaniem',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Zmiana pozycji',
        pointsFactor: 1,
      },
      {
        exerciseName: 'Wrażenie ogólne',
        pointsFactor: 2,
      },
    ],
    grading: [
      {
        description: 'Ocena doskonała',
        percentageDescription: 'Minimum 80%',
        grade: [112, 140],
        isGivingPromotion: true,
      },
      {
        description: 'Ocena bardzo dobra',
        percentageDescription: 'Minimum 70%',
        grade: [98, 111.5],
        isGivingPromotion: false,
      },
      {
        description: 'Ocena dobra',
        percentageDescription: 'Minimum 50%',
        grade: [70, 97.5],
        isGivingPromotion: false,
      },
      {
        description: 'Bez oceny',
        percentageDescription: 'Bez oceny',
        grade: [0, 69.5],
        isGivingPromotion: false,
      },
    ],
  },
  {
    name: 'Klasa 1',
    pointsToGain: 320,
    exercises: [
      {
        exerciseName:
          'Siad w grupie przez 1 minutę, przewodnik w zasięgu wzroku',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Chodzenie przy nodze',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Stój lub siad lub waruj w marszu',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Przywołanie',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Wysyłanie psa do kwadratu',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Zmiany pozycji na odległość',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Aport koziołka i skok przez przeszkodę',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Obieganie grupy pachołkóww / walca z przywołaniem',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Wrażenie ogólne',
        pointsFactor: 2,
      },
    ],
    grading: [
      {
        description: 'Ocena doskonała',
        percentageDescription: 'Minimum 80%',
        grade: [256, 320],
        isGivingPromotion: true,
      },
      {
        description: 'Ocena bardzo dobra',
        percentageDescription: 'Minimum 70%',
        grade: [224, 255.5],
        isGivingPromotion: false,
      },
      {
        description: 'Ocena dobra',
        percentageDescription: 'Minimum 60%',
        grade: [192, 223.5],
        isGivingPromotion: false,
      },
      {
        description: 'Bez oceny',
        percentageDescription: 'Bez oceny',
        grade: [0, 191.5],
        isGivingPromotion: false,
      },
    ],
  },
  {
    name: 'Klasa 2',
    pointsToGain: 320,
    exercises: [
      {
        exerciseName:
          'Waruj w grupie przez 2 minuty, przewodnik poza zasięgiem wzroku',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Chodzenie przy nodze',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Stój/siad/waruj w marszu',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Przywołanie z zatrzymaniem stój',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Wysyłanie psa do kwadratu, waruj i przywołanie',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Aport kierunkowy',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Rozpoznanie i przyniesienie własnego przedmiotu',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Zmiany pozycji na odległość',
        pointsFactor: 4,
      },
      {
        exerciseName:
          'Wysyłanie wokół grupy pachołków/walca, zatrzymanie i skok przez przeszkodę',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Wrażenie ogólne',
        pointsFactor: 2,
      },
    ],
    grading: [
      {
        description: 'Ocena doskonała',
        percentageDescription: 'Minimum 80%',
        grade: [256, 320],
        isGivingPromotion: true,
      },
      {
        description: 'Ocena bardzo dobra',
        percentageDescription: 'Minimum 70%',
        grade: [224, 255.5],
        isGivingPromotion: false,
      },
      {
        description: 'Ocena dobra',
        percentageDescription: 'Minimum 60%',
        grade: [192, 223.5],
        isGivingPromotion: false,
      },
      {
        description: 'Bez oceny',
        percentageDescription: 'Bez oceny',
        grade: [0, 191.5],
        isGivingPromotion: false,
      },
    ],
  },
  {
    name: 'Klasa 3',
    pointsToGain: 320,
    exercises: [
      {
        exerciseName:
          'Siad w grupie przez 2 minuty, przewodnik poza zasięgiem wzroku',
        pointsFactor: 2,
      },
      {
        exerciseName: 'Waruj w grupie przez 1 minutę i przywołanie',
        pointsFactor: 2,
      },
      {
        exerciseName: 'Chodzenie przy nodze',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Stój, siad i waruj w marszu',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Przywołanie z zatrzymaniem stój/siad/waruj',
        pointsFactor: 3,
      },
      {
        exerciseName:
          'Wysyłanie psa kierunkowe, do kwadratu, waruj i przywołanie',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Aport kierunkowy',
        pointsFactor: 3,
      },
      {
        exerciseName:
          'Wysyłanie wokół grupy pachołków, zatrzymanie (stój/siad/waruj), aport koziołka i skok przez przeszkodę',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Rozpoznanie i przyniesienie własnego przedmiotu',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Zmiany pozycji na odległość',
        pointsFactor: 4,
      },
    ],
    grading: [
      {
        description: 'Ocena doskonała',
        percentageDescription: 'Minimum 80%',
        grade: [256, 320],
        isGivingPromotion: true,
      },
      {
        description: 'Ocena bardzo dobra',
        percentageDescription: 'Minimum 70%',
        grade: [224, 255.5],
        isGivingPromotion: false,
      },
      {
        description: 'Ocena dobra',
        percentageDescription: 'Minimum 60%',
        grade: [192, 223.5],
        isGivingPromotion: false,
      },
      {
        description: 'Bez oceny',
        percentageDescription: 'Bez oceny',
        grade: [0, 191.5],
        isGivingPromotion: false,
      },
    ],
  },
];

export default CLASSES;
