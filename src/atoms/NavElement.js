import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
const Element = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;

  .navText {
    color: #323f4b;
    width: 33%;
    font-size: 19px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  .arrow {
    color: #cbd2d9;
    font-size: 30px;
  }

  .back {
    font-size: 14px;
    color: #aeaeae;
  }
`;

const Div = styled.div`
  width: 33%;
`;
const NavElement = (props) => {
  const { text } = props;
  //   NavElement.propTypes = {
  //     props: PropTypes.object,

  //   };

  return (
    <>
      <Element>
        <Wrapper>
          <FontAwesomeIcon icon={faChevronLeft} className="arrow" />
          <h3 className="back">wróć</h3>
        </Wrapper>
        <h1 className="navText">{text}</h1>
        <Div></Div>
      </Element>
    </>
  );
};

NavElement.propTypes = {
  text: PropTypes.string,
};
// Element.propTypes = {
//   props: PropTypes.shape({
//     text: PropTypes.string,
//   }),
// };
export default NavElement;
