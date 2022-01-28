import PropTypes from 'prop-types';
import DataLineStyled from './DataLineStyled';

const DataLine = ({ text, children }) => {
  let textArray = [];
  typeof text == 'string' ? textArray.push(text) : (textArray = text);
  return (
    <DataLineStyled>
      {textArray.map((text, index) => (
        <div key={index}>
          {text}
          {children}
        </div>
      ))}
    </DataLineStyled>
  );
};

DataLine.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node,
};
export default DataLine;
