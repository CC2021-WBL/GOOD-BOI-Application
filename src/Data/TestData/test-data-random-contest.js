import CLASSES from './test-data-classes';
import DOGS from './test-data-dogs';
import PARTICIPANTS from './test-data-participants';

const RANDOM_CONTEST = {
  id: 'a0347677-c3c9-4edc-9d46-fed4a958fdc2',
  city: 'Ciechanów',
  date: new Date(2022, 2, 8),
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
};

export default RANDOM_CONTEST;
