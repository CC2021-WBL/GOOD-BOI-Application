import ContestDetailsLineStyled from './ContestDetailsLineStyled';
import PropTypes from 'prop-types';

const ContestDetailsLine = ({ text, highlight = false, judge = false }) => {
  let textArray = [];
  typeof text == 'string' ? textArray.push(text) : (textArray = text);
  return (
    <ContestDetailsLineStyled highlight={highlight} judge={judge}>
      {textArray.map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </ContestDetailsLineStyled>
  );
};

ContestDetailsLine.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  highlight: PropTypes.bool,
  judge: PropTypes.bool,
};
export default ContestDetailsLine;
