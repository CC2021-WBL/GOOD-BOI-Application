import React from 'react';
import NavFooterBtn from '../../Atoms/NavFooterBtn/NavFooterBtnStyled';

const ClassesPage = () => {
  return (
    <div>
      <h1>I am a Classes Page Component</h1>
      <NavFooterBtn />
      <NavFooterBtn text="iuh" active />
      <NavFooterBtn text="iuh" active />
    </div>
  );
};

export default ClassesPage;
