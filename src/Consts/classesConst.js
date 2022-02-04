const CLASSES = [
  {
    name: 'Klasa 0',
    pointsToGain: 140,
    exercises: [
      {
        exerciseName: 'Socjalizacja',
        codeName: '0.1',
        pointsFactor: null,
        isRequiredToCompleteClass: true,
      },
      {
        exerciseName: 'Waruj/Siad przez 1 minutę',
        codeName: '0.2',
        pointsFactor: 1,
      },
      {
        exerciseName: 'Chodzenie przy nodze',
        codeName: '0.3',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Próba trzymania aportu',
        codeName: '0.4',
        pointsFactor: 2,
      },
      {
        exerciseName: 'Przywołanie',
        codeName: '0.5',
        pointsFactor: 2,
      },
      {
        exerciseName: 'Obieganie 3 pachołków z przywołaniem',
        codeName: '0.6',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Zmiana pozycji',
        codeName: '0.7',
        pointsFactor: 1,
      },
      {
        exerciseName: 'Wrażenie ogólne',
        codeName: '0.8',
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
        codeName: '1.1',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Chodzenie przy nodze',
        codeName: '1.2',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Stój lub siad lub waruj w marszu',
        codeName: '1.3',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Przywołanie',
        codeName: '1.4',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Wysyłanie psa do kwadratu',
        codeName: '1.5',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Zmiany pozycji na odległość',
        codeName: '1.6',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Aport koziołka i skok przez przeszkodę',
        codeName: '1.7',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Obieganie grupy pachołkóww / walca z przywołaniem',
        codeName: '1.8',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Wrażenie ogólne',
        codeName: '1.9',
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
        codeName: '2.1',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Chodzenie przy nodze',
        codeName: '2.2',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Stój/siad/waruj w marszu',
        codeName: '2.3',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Przywołanie z zatrzymaniem stój',
        codeName: '2.4',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Wysyłanie psa do kwadratu, waruj i przywołanie',
        codeName: '2.5',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Aport kierunkowy',
        codeName: '2.6',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Rozpoznanie i przyniesienie własnego przedmiotu',
        codeName: '2.7',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Zmiany pozycji na odległość',
        codeName: '2.8',
        pointsFactor: 4,
      },
      {
        exerciseName:
          'Wysyłanie wokół grupy pachołków/walca, zatrzymanie i skok przez przeszkodę',

        codeName: '2.9',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Wrażenie ogólne',
        codeName: '2.10',
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
        codeName: '3.1',
        pointsFactor: 2,
      },
      {
        exerciseName: 'Waruj w grupie przez 1 minutę i przywołanie',
        codeName: '3.2',
        pointsFactor: 2,
      },
      {
        exerciseName: 'Chodzenie przy nodze',
        codeName: '3.3',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Stój, siad i waruj w marszu',
        codeName: '3.4',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Przywołanie z zatrzymaniem stój/siad/waruj',
        codeName: '3.5',
        pointsFactor: 3,
      },
      {
        exerciseName:
          'Wysyłanie psa kierunkowe, do kwadratu, waruj i przywołanie',
        codeName: '3.6',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Aport kierunkowy',
        codeName: '3.7',
        pointsFactor: 3,
      },
      {
        exerciseName:
          'Wysyłanie wokół grupy pachołków, zatrzymanie (stój/siad/waruj), aport koziołka i skok przez przeszkodę',
        codeName: '3.8',
        pointsFactor: 4,
      },
      {
        exerciseName: 'Rozpoznanie i przyniesienie własnego przedmiotu',
        codeName: '3.9',
        pointsFactor: 3,
      },
      {
        exerciseName: 'Zmiany pozycji na odległość',
        codeName: '3.10',
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
