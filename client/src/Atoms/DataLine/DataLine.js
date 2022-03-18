import DataLineStyled from './DataLineStyled';
import PropTypes from 'prop-types';

const DataLine = ({ text }) => {
  let textArray = [];
  typeof text == 'string' ? textArray.push(text) : (textArray = text);
  return (
    <DataLineStyled>
      {textArray.map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </DataLineStyled>
  );
};

DataLine.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
export default DataLine;
