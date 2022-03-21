import PropTypes from 'prop-types';

import ColumnWrapperStyled from './ColumnWrapperStyled';

const ColumnWrapper = ({
  children,
  paddingLeftRight = 0,
  paddingTop = 0,
  paddingBottom = 0,
  className,
  maxWidthBigScreen,
  alignItems,
  contentPosition,
}) => {
  return (
    <ColumnWrapperStyled
      paddingLeftRight={paddingLeftRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      className={className}
      maxWidthBigScreen={maxWidthBigScreen}
      alignItems={alignItems}
      contentPosition={contentPosition}
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
