const CLASSES = [
  {
    id: 'ddcb2781-2101-40b2-9739-a80a156d1c52',
    name: 'Klasa 0',
    pointsToGain: 140,
    exercises: [
      {
        id: '64268e7d-a891-4cb6-841b-603dff67956d',
        codeName: '0.1',
        name: 'Socjalizacja',
        pointsFactor: 1,
        points: 0,
        isRequiredToCompleteClass: true,
      },
      {
        id: '6fbea288-3eef-40c4-8c89-80f655da6a23',
        codeName: '0.2',
        name: 'Waruj/Siad przez 1 minutę',
        pointsFactor: 1,
        points: 10,
        isRequiredToCompleteClass: false,
      },
      {
        id: '14eec3e6-cb8a-4988-b30e-9ab91e57e9a2',
        codeName: '0.3',
        name: 'Chodzenie przy nodze',
        pointsFactor: 3,
        points: 10,
        isRequiredToCompleteClass: false,
      },
      {
        id: '24fd9ab9-f008-47a0-bb8d-d5487bd03458',
        codeName: '0.4',
        name: 'Próba trzymania aportu',
        pointsFactor: 2,
        points: 10,
        isRequiredToCompleteClass: false,
      },
      {
        id: 'd342a963-1391-4aa3-8fa3-743a6eac4e28',
        codeName: '0.5',
        name: 'Przywołanie',
        pointsFactor: 2,
        points: 10,
        isRequiredToCompleteClass: false,
      },
      {
        id: 'd89f996a-7085-4a75-a42a-062bb952450c',
        codeName: '0.6',
        name: 'Obieganie 3 pachołków z przywołaniem',
        pointsFactor: 3,
        points: 10,
        isRequiredToCompleteClass: false,
      },
      {
        id: '3def9e5c-5420-44ef-b49b-5c8c54c5d326',
        codeName: '0.7',
        name: 'Zmiana pozycji',
        pointsFactor: 1,
        points: 10,
        isRequiredToCompleteClass: false,
      },
      {
        id: 'dcd2cd35-6fa5-4123-85b8-b027e1f842b6',
        codeName: '0.8',
        name: 'Wrażenie ogólne',
        pointsFactor: 2,
        points: 10,
        isRequiredToCompleteClass: false,
      },
    ],
    grading: [
      {
        description: 'Ocena doskonała',
        percentageDescription: 'Minimum 80%',
        grade: [112, 140],
        isGivingPromotion: true;
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
];

export default CLASSES;
