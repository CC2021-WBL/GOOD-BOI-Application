import DOGS from './test-data-dogs';
import classes from '../../Consts/excercises';

const createLeaderboard = () => {
  let leaderboard = [];

  const exercises = Object.entries(classes.class1);
  console.log(exercises);

  DOGS.forEach((element) => {
    let doggoLeaderboard = [];
    doggoLeaderboard.push(element.dogName);
    exercises.forEach((element) => {
      const singleResult = [];
      singleResult.push(element[1]);
      const result = getRandomNumber();
      singleResult.push(result);
      doggoLeaderboard.push(singleResult);
    });
    leaderboard.push(doggoLeaderboard);
  });

  function getRandomNumber() {
    return Math.floor(Math.random() * 41);
  }
  console.log(leaderboard);
  return leaderboard;
};

export default createLeaderboard;
