import ContestDetailsLine from '../../../../Atoms/ContestDetailsLine/ContestDetailsLine';
import PropTypes from 'prop-types';
import {
  judgesTextTemplate,
  toBeAnnounced,
} from '../../../../Consts/ContestDetailsCONSTS';

const ContestDetailsJudges = ({ judges = [] }) => {
  judges.length === 0 && judges.push(toBeAnnounced);
  return (
    <>
      <ContestDetailsLine text={judgesTextTemplate} />
      {judges.map((judge, index) => (
        <ContestDetailsLine key={`judge-${index}`} text={judge} judge={true} />
      ))}
    </>
  );
};
ContestDetailsJudges.propTypes = {
  judges: PropTypes.array,
};

export default ContestDetailsJudges;
