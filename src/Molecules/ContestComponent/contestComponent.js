import propTypes from 'prop-types';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import {
  ContestComponentStyled,
  ContestNameStyled,
  ContestInsideElementStyled,
} from './ContestComponenyStyled';
import { getDataFormatDdMonthYyy } from '../../Tools/TimeFunctions';

const ContestComponent = ({ contestName, contestDate, contestCity }) => {
  const date = getDataFormatDdMonthYyy(contestDate);
  const city = contestCity.toUpperCase();

  return (
    <ContestComponentStyled>
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
