import ContestDetailsLineStyled from './ContestDetailsLineStyled';
import PropTypes from 'prop-types';

const ContestDetailsLine = ({
  textArray = [],
  highlight = false,
  judge = false,
}) => {
  return (
    <ContestDetailsLineStyled highlight={highlight} judge={judge}>
      {textArray.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </ContestDetailsLineStyled>
  );
};

ContestDetailsLine.propTypes = {
  textArray: PropTypes.array,
  highlight: PropTypes.bool,
  judge: PropTypes.bool,
};
export default ContestDetailsLine;
