import { ContestInsideElementStyled } from './ContestComponentStyled';
import PropTypes from 'prop-types';

const ContestInsideElement = ({ isClicked, children }) => {
  return (
    <ContestInsideElementStyled isClicked={isClicked}>
      {children}
    </ContestInsideElementStyled>
  );
};

ContestInsideElement.propTypes = {
  isClicked: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ContestInsideElement;
