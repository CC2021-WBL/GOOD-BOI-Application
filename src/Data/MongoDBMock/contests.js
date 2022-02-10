const contests = [
  {
    contestId: '3845029d-e97d-41ed-997f-2299d09ef648',
    contestName: 'Piętnasty zjazd dobrych chłopaków',
    kynologiqueDepartment: 'Poznań',
    startDate: new Date(2022, 5, 1, 8, 30),
    endDate: new Date(2022, 5, 2, 17, 0),
    applicationOpenDate: new Date(2022, 2, 15, 20, 0),
    applicationClosedDate: new Date(2022, 3, 1, 23, 59),
    address: {
      country: 'Polska',
      city: 'Poznań',
      street: 'ul. Rysia Peji',
      numberOfHouse: '997',
      postalCode: '99-023',
    },
    judges: ['Zuzzana Zezowa'],
    steward: 'Zygfryd Zaduzy',
    manager: 'Zbyszko Bogdaniec',
    feePLN: 110,
    participants: ['matylda1234', 'bogdan678', 'zosia9474', 'eustachy123'],
    obedienceClasses: {
      0: [
        {
          dogId: 'VIII-40407',
          dogName: 'Woof',
          competingPairsId: '22-05-01Woof',
        },
        {
          dogId: 'VIII-27165',
          dogName: 'Nosek',
          competingPairsId: '22-05-01Nosek',
        },
        {
          dogId: 'V-11165',
          dogName: 'Ptysio',
          competingPairsId: '22-05-01Ptysio',
        },
      ],
      1: [
        {
          dogId: 'X-37657',
          dogName: 'Ollie',
          competingPairsId: '22-05-01Ollie',
        },
        {
          dogId: 'VII-27885',
          dogName: 'Kluska',
          competingPairsId: '22-05-01Kluska',
        },
        {
          dogId: 'VI-15765',
          dogName: 'Norah',
          competingPairsId: '22-05-01Norah',
        },
      ],
    },
  },
  {
    contestId: 'c9e7b738-f8e6-4300-9087-332ad5a28b4f',
    contestName: 'Konkurs grzeczności',
    kynologiqueDepartment: 'Sopot',
    startDate: new Date(2021, 12, 24, 11, 0),
    endDate: new Date(2021, 12, 24, 18, 30),
    applicationOpenDate: new Date(2021, 10, 7, 20, 0),
    applicationClosedDate: new Date(2021, 10, 14, 23, 59),
    address: {
      country: 'Polska',
      city: 'Sopot',
      street: 'ul.  Potokowa',
      numberOfHouse: '997',
      postalCode: '56-234',
    },
    judges: ['Aniela Loczek'],
    steward: 'Bruno Mars',
    manager: 'Gerwazy Kapusta',
    feePLN: 70,
    participants: ['matylda1234', 'bogdan678', 'zosia9474', 'eustachy123'],
    obedienceClasses: {
      0: [
        {
          dogId: 'VIII-40407',
          dogName: 'Woof',
          competingPairsId: '21-12-24Woof',
        },
      ],
      1: [
        {
          dogId: 'VIII-27165',
          dogName: 'Nosek',
          competingPairsId: '21-12-24Nosek',
        },
      ],
      2: [
        {
          dogId: 'V-11165',
          dogName: 'Ptysio',
          competingPairsId: '21-12-24Ptysio',
        },
        {
          dogId: 'X-37657',
          dogName: 'Ollie',
          competingPairsId: '21-12-24Ollie',
        },
      ],
      3: [
        {
          dogId: 'VII-27885',
          dogName: 'Kluska',
          competingPairsId: '21-12-24Kluska',
        },
        {
          dogId: 'VI-15765',
          dogName: 'Norah',
          competingPairsId: '21-12-24Norah',
        },
      ],
    },
  },
  {
    contestId: 'a0347677-c3c9-4edc-9d46-fed4a958fdc2',
    contestName: 'XII Zawody im. Pana Starosty',
    kynologiqueDepartment: 'Gdynia',
    startDate: new Date(2022, 3, 22, 9, 0),
    endDate: new Date(2022, 3, 23, 19, 0),
    applicationOpenDate: new Date(2022, 1, 10, 10, 0),
    applicationClosedDate: new Date(2022, 2, 20, 23, 59),
    address: {
      country: 'Polska',
      city: 'Gdańsk',
      street: 'ul.Grunwaldzka',
      numberOfHouse: '222',
      postalCode: '80-992',
    },
    judges: ['Alberto Makkaroni'],
    steward: 'Wiesio Kapusta',
    manager: 'Jagienka Krzywobroda',
    feePLN: 90,
    participants: ['matylda1234', 'bogdan678', 'zosia9474', 'eustachy123'],
    obedienceClasses: {
      0: [
        {
          dogId: 'VIII-40407',
          dogName: 'Woof',
          competingPairsId: '22-03-22Woof',
        },
        {
          dogId: 'VIII-27165',
          dogName: 'Nosek',
          competingPairsId: '22-03-22Nosek',
        },
        {
          dogId: 'V-11165',
          dogName: 'Ptysio',
          competingPairsId: '22-03-22Ptysio',
        },
      ],
      1: [
        {
          dogId: 'X-37657',
          dogName: 'Ollie',
          competingPairsId: '22-03-22Ollie',
        },
        {
          dogId: 'VII-27885',
          dogName: 'Kluska',
          competingPairsId: '22-03-22Kluska',
        },
        {
          dogId: 'VI-15765',
          dogName: 'Norah',
          competingPairsId: '22-03-22Norah',
        },
      ],
    },
  },
  {
    contestId: 'dft6702f-fr56-12sr-35b5-fed4a958fdc2',
    contestName: 'Mistrzostwa Podlasia w posłuszeństwie',
    kynologiqueDepartment: 'Białystok',
    startDate: new Date(2022, 1, 10, 10, 0),
    endDate: new Date(2022, 1, 10, 23, 0),
    applicationOpenDate: new Date(2021, 12, 10, 10, 0),
    applicationClosedDate: new Date(2021, 12, 20, 23, 59),
    address: {
      country: 'Polska',
      city: 'Białystok',
      street: 'ul.Sportowa',
      numberOfHouse: '50',
      postalCode: '36-123',
    },
    judges: ['Wanda Jurajska'],
    steward: 'Amelia Wielkomiejska',
    manager: 'Renata Żołądek',
    feePLN: 150,
    participants: ['matylda1234', 'bogdan678', 'zosia9474', 'eustachy123'],
    obedienceClasses: {
      2: [
        {
          dogId: 'VIII-40407',
          dogName: 'Woof',
          competingPairsId: '22-02-10Woof',
        },
        {
          dogId: 'VIII-27165',
          dogName: 'Nosek',
          competingPairsId: '22-02-10Nosek',
        },
      ],
      3: [
        {
          dogId: 'V-11165',
          dogName: 'Ptysio',
          competingPairsId: '22-02-10Ptysio',
        },
        {
          dogId: 'X-37657',
          dogName: 'Ollie',
          competingPairsId: '22-02-10Ollie',
        },
        {
          dogId: 'VII-27885',
          dogName: 'Kluska',
          competingPairsId: '22-02-10Kluska',
        },
        {
          dogId: 'VI-15765',
          dogName: 'Norah',
          competingPairsId: '22-02-10Norah',
        },
      ],
    },
  },
];

export default contests;
