import CLASSES from './test-data-classes';
import COMPETITORS from './test-data-competitor';

const RANDOM_CONTEST = {
  id: 'a0347677-c3c9-4edc-9d46-fed4a958fdc2',
  city: 'Ciechanów',
  address: 'Warszawska 57',
  date: new Date(2022, 2, 8),
  classes: [
    { obedienceClass: CLASSES[0], competitors: COMPETITORS, isCompleted: true },
    {
      obedienceClass: CLASSES[1],
      competitors: COMPETITORS,
      isCompleted: false,
    },
  ],
};

export default RANDOM_CONTEST;
