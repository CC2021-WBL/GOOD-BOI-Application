import ColumnWrapperStyled from './ColumnWrapperStyled';
import PropTypes from 'prop-types';

const ColumnWrapper = ({
  children,
  paddingLeftRight = 0,
  paddingTop = 0,
  paddingBottom = 0,
}) => {
  return (
    <ColumnWrapperStyled
      paddingLeftRight={paddingLeftRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      {children}
    </ColumnWrapperStyled>
  );
};

ColumnWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  paddingLeftRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
};

export default ColumnWrapper;
