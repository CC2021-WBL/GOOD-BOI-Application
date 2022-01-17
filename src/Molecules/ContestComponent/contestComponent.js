import propTypes from 'prop-types';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import {
  ContestComponentStyled,
  ContestNameStyled,
  ContestInsideElementStyled,
} from './ContestComponenyStyled';
import { getDataFormatDdMonthYyy } from '../../Tools/TimeFunctions';
import { useState } from 'react/cjs/react.development';

const ContestComponent = ({ contestName, contestDate, contestCity }) => {
  const [isClicked, setIsClicked] = useState();
  const date = getDataFormatDdMonthYyy(contestDate);
  const city = contestCity.toUpperCase();

  const handleClick = () => {
    setIsClicked((isClicked) => !isClicked);
    console.log(isClicked);
  };

  return (
    <ContestComponentStyled isClicked={isClicked} onClick={handleClick}>
      <ContestNameStyled>{contestName}</ContestNameStyled>
      <ContestInsideElementStyled>
        <time dateTime={date}>{date}</time>
        <p>{city}</p>
      </ContestInsideElementStyled>
      <ContestInsideElementStyled>
        <InfoLabel classInfo={{ dogsAmount: 30 }}></InfoLabel>
        <InfoLabel dateOfContest={contestDate}></InfoLabel>
      </ContestInsideElementStyled>
    </ContestComponentStyled>
  );
};

ContestComponent.propTypes = {
  contestName: propTypes.string,
  contestDate: propTypes.instanceOf(Date),
  contestCity: propTypes.string,
};

export default ContestComponent;
