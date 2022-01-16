import propTypes from 'prop-types';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';

const ContestComponent = ({ contestName, contestDate, contestCity }) => {
  return (
    <div>
      <p>{contestName}</p>
      <div>
        <time dateTime={contestDate}></time>
        <p>{contestCity}</p>
      </div>
      <div>
        <InfoLabel dateOfContest={contestDate}></InfoLabel>
        <InfoLabel classInfo={{ dogsAmount: 30 }}></InfoLabel>
      </div>
    </div>
  );
};

ContestComponent.propTypes = {
  contestName: propTypes.string,
  contestDate: propTypes.instanceOf(Date),
  contestCity: propTypes.string,
};

export default ContestComponent;
