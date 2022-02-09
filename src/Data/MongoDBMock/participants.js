const participants = [
  {
    participantId: 'matylda1234',
    email: 'matylda@op.pl',
    password: 'dupabiskupa',
    phoneNumber: 48445234876,
    participantName: 'Matylda',
    participantSurname: 'Borutka',
    address: {
      country: 'Polska',
      city: 'Sfornegacie',
      street: 'ul.Pszczelna',
      numberOfHouse: '27/5',
      postalCode: '50-124',
    },
    dogs: [
      {
        dogId: 'VIII-40407',
        dogName: 'Woof',
      },
      {
        dogId: 'VII-27885',
        dogName: 'Kluska',
      },
    ],
    portalRoles: ['participant', 'staff'],
  },
  {
    participantId: 'bogdan678',
    email: 'bogdan777@wp.pl',
    password: 'rzuckamienia',
    phoneNumber: 48568432890,
    participantName: 'Bodzio',
    participantSurname: 'Rolnik',
    address: {
      country: 'Polska',
      city: 'Trabki Wielkie',
      street: 'al Dziurawa',
      numberOfHouse: '1',
      postalCode: '33-221',
    },
    dogs: [
      {
        dogId: 'VIII-27165',
        dogName: 'Nosek',
      },
    ],
    portalRoles: ['participant'],
  },
  {
    participantId: 'eustachy123',
    email: 'eustachy123@wp.pl',
    password: 'mordeczka',
    phoneNumber: 48348087554,
    participantName: 'Eustachy',
    participantSurname: 'Trompka',
    address: {
      country: 'Polska',
      city: 'Warszawa',
      street: 'ul.Gnilna',
      numberOfHouse: '45/65',
      postalCode: '40-665',
    },
    dogs: [
      {
        dogId: 'X-37657',
        dogName: 'Ollie',
      },
    ],
    portalRoles: ['participant'],
  },
  {
    participantId: 'zosia9474',
    email: 'zosia@wp.pl',
    password: 'zosiazosia',
    phoneNumber: 48609906003,
    participantName: 'Zosia',
    participantSurname: 'Samosia',
    address: {
      country: 'Polska',
      city: 'Warszawa',
      street: 'ul.Słoneczna',
      numberOfHouse: '15/1',
      postalCode: '10-234',
    },
    dogs: [
      {
        dogId: 'V-11165',
        dogName: 'Ptysio',
      },
      {
        dogId: 'VI-15765',
        dogName: 'Norah',
      },
    ],
    portalRoles: ['participant'],
  },
];

export default participants;

// .insertOne - dodaje 1 obiekt do kolekcji, przyjmuje obiekt
// .insertMany - dodaje wiele obiektów do kolekcji, przyjmuje tablicę obiektów

/* db.participans.insertOne({
  participantId: 'playernhdnjhyvsjnlko32',
  email: 'bogdan777@wp.pl',
  password: 'rzuckamienia',
  participantName: 'Bodzio',
  participantSurname: 'Rolnik',
  country: 'Polska',
  city: 'Trabki Wielkie',
  street: 'al Dziurawa',
  numberOfHouse: '1',
  postalCode: '33-221',
  dogs: [
    {
      dogId: '46576882',
      dogName: 'Nosek',
    },
  ],
  portalRoles: ['participant'],
}); */

// db.participants.find() - wyświetli wszystkie obiekty kolekcji
// db.particpants.find({participantId: "53e823248984"}) - wyświetli wszystkie dane zawodnika pod tym ID
// db.participants.find({participantId: "53e823248984"}, {dogs: 1})
