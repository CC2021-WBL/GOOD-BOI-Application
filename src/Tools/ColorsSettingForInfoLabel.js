import { COLORSMOTIVE as c } from '../Consts/infoLabelConsts';

const setColorMotive = (pointOnTimeLine, dogsAmount, isCompleted) => {
  if (pointOnTimeLine === 'archiwalny') {
    return c.GREY;
  } else if ((pointOnTimeLine === 'w trakcie' && !dogsAmount) || isCompleted) {
    return c.GREEN;
  } else if (pointOnTimeLine === 'nadchodzący' && !dogsAmount) {
    return c.BLUE;
  }
  return c.WHITE;
};

export default setColorMotive;
