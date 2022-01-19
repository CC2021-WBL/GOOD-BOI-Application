import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import propTypes from 'prop-types';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import {
  ContestComponentStyled,
  ContestNameStyled,
  ContestInsideElementStyled,
} from './ContestComponenyStyled';
import { getDataFormatDdMonthYyy } from '../../Tools/TimeFunctions';
import { useState } from 'react/cjs/react.development';
// import { useNavigate } from 'react-router-dom';

const ContestComponent = ({ contestId, contestIndex }) => {
  const [isClicked, setIsClicked] = useState();
  //  let navigate = useNavigate();
  const name = RANDOM_CONTESTS[contestIndex].name;
  const date = getDataFormatDdMonthYyy(RANDOM_CONTESTS[contestIndex].date);
  const city = RANDOM_CONTESTS[contestIndex].city.toUpperCase();
  console.log(contestId);

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked((isClicked) => !isClicked);
    // navigate(`./${contestId}/classes`);
    //navigate musi przekazać dane o klasach jakie mają się odbyć i nazwach psów w tych klasach?
  };

  return (
    <ContestComponentStyled isClicked={isClicked} onClick={handleClick}>
      <ContestNameStyled>{name}</ContestNameStyled>
      <ContestInsideElementStyled>
        <time dateTime={date}>{date}</time>
        <p>{city}</p>
      </ContestInsideElementStyled>
      <ContestInsideElementStyled>
        <InfoLabel classInfo={{ dogsAmount: 30 }}></InfoLabel>
        <InfoLabel
          dateOfContest={RANDOM_CONTESTS[contestIndex].date}
        ></InfoLabel>
      </ContestInsideElementStyled>
    </ContestComponentStyled>
  );
};

ContestComponent.propTypes = {
  contestId: propTypes.string,
  contestDate: propTypes.instanceOf(Date),
  contestIndex: propTypes.number,
};

export default ContestComponent;
