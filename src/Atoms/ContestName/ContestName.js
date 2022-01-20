import { ContestNameStyled } from '../../Molecules/ContestComponent/ContestComponentStyled';
import propTypes from 'prop-types';

const ContestName = ({ contestName }) => {
  return <ContestNameStyled>{contestName}</ContestNameStyled>;
};

ContestName.propTypes = {
  contestName: propTypes.string,
};

export default ContestName;
