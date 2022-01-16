import propTypes from 'prop-types';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import ContestComponentStyled from './ContestComponenyStyled';
import { getDataFormatDdMonthYyy } from '../../Tools/TimeFunctions';

const ContestComponent = ({ contestName, contestDate, contestCity }) => {
  const date = getDataFormatDdMonthYyy(contestDate);
  console.log(date);

  return (
    <ContestComponentStyled>
      <p>{contestName}</p>
      <div className="double-elements">
        <time dateTime={contestDate}></time>
        <p>{contestCity}</p>
      </div>
      <div className="double-elements">
        <InfoLabel dateOfContest={contestDate}></InfoLabel>
        <InfoLabel classInfo={{ dogsAmount: 30 }}></InfoLabel>
      </div>
    </ContestComponentStyled>
  );
};

ContestComponent.propTypes = {
  contestName: propTypes.string,
  contestDate: propTypes.instanceOf(Date),
  contestCity: propTypes.string,
};

export default ContestComponent;
