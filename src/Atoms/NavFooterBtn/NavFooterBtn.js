import NavFooterBtnStyled from './NavFooterBtnStyled';
import propTypes from 'prop-types';
import React from 'react';

const NavFooterBtn = ({ text, active }) => {
  return <NavFooterBtnStyled active={active}>{text}</NavFooterBtnStyled>;
};

NavFooterBtn.propTypes = {
  text: propTypes.text,
  active: propTypes.active,
};

//
// const PriSecBtn = (props) => {
//   return (
//     <PriSecBtnStyled primary={props.primary}>{props.text}</PriSecBtnStyled>
//   );
// };

// PriSecBtn.propTypes = {
//   primary: propTypes.string,
//   text: propTypes.string,
// };
//
export default NavFooterBtn;
