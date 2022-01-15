import propTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { Wrapper } from './FooterProfileBtnStyled';
import { Div } from './FooterProfileBtnStyled';

function clickHandler() {
  console.log('clicked profie button');
}
const FooterProfileBtn = () => {
  return (
    <>
      <Wrapper onClick={clickHandler}>
        <FaUserCircle />
        <Div> Twój profil </Div>
      </Wrapper>
    </>
  );
};

FooterProfileBtn.propTypes = {
  text: propTypes.string,
  active: propTypes.string,
};

export default FooterProfileBtn;
