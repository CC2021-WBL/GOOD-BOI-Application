import CLASSES from './test-data-classes';
import DOGS from './test-data-dogs';
import PARTICIPANTS from './test-data-participants';

const RANDOM_CONTESTS = [
  {
    id: 'a0347677-c3c9-4edc-9d46-fed4a958fdc2',
    name: 'XII Zawody im. Pana Starosty',
    address: 'ul. Grunwaldzka 402',
    place: 'Olivia Business Center',
    city: 'Gdańsk',
    judges: ['Natasza Urbańska', 'Michał Milowicz'],
    applicationOpenDate: new Date(2022, 1, 10, 10, 0),
    applicationClosedDate: new Date(2022, 2, 20, 23, 59),
    applicationFeeInPLN: 70,
    date: new Date(2022, 3, 21, 10, 0),
    obedienceClasses: [
      {
        obedienceClass: CLASSES[0],
        participants: PARTICIPANTS,
        dogs: DOGS,
        isCompleted: true,
      },
      {
        obedienceClass: CLASSES[1],
        participants: PARTICIPANTS,
        dogs: DOGS,
        isCompleted: false,
      },
    ],
  },
  {
    id: '3845029d-e97d-41ed-997f-2299d09ef648',
    name: 'Piętnasty zjazd dobrych chłopaków',
    city: 'Gdańsk',
    date: new Date(2022, 5, 5, 18, 0),
    obedienceClasses: [
      {
        obedienceClass: CLASSES[0],
        participants: PARTICIPANTS,
        dogs: DOGS,
        isCompleted: true,
      },
      {
        obedienceClass: CLASSES[1],
        participants: PARTICIPANTS,
        dogs: DOGS,
        isCompleted: false,
      },
    ],
  },
  {
    id: 'c9e7b738-f8e6-4300-9087-332ad5a28b4f',
    name: 'Konkurs grzeczności',
    city: 'Gdańsk',
    date: new Date(2021, 12, 24, 13, 0),
    obedienceClasses: [
      {
        obedienceClass: CLASSES[0],
        participants: PARTICIPANTS,
        dogs: DOGS,
        isCompleted: true,
      },
      {
        obedienceClass: CLASSES[1],
        participants: PARTICIPANTS,
        dogs: DOGS,
        isCompleted: false,
      },
    ],
  },
];

export default RANDOM_CONTESTS;
