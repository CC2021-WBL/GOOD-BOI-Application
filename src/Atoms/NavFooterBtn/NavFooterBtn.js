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

export default NavFooterBtn;
