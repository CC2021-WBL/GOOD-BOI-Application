import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs';
import { Element, Wrapper, Div } from './NavElementStyled';

const NavElement = (props) => {
  const { text } = props;

  return (
    <>
      <Element>
        <Wrapper>
          <BsChevronLeft className="arrowLeft" />
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

export default NavElement;
