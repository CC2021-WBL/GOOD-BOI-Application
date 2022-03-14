import PropTypes from 'prop-types';

import ColumnWrapperStyled from './ColumnWrapperStyled';

const ColumnWrapper = ({
  children,
  paddingLeftRight = 0,
  paddingTop = 0,
  paddingBottom = 0,
  className,
  maxWidthBigScr,
}) => {
  return (
    <ColumnWrapperStyled
      paddingLeftRight={paddingLeftRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      className={className}
      maxWidthBigScr={maxWidthBigScr}
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
  className: PropTypes.string,
};

export default ColumnWrapper;
