import ContestDetailsStyled from './ContestDetailsStyled';
import Map from './Map';
import ContestDetailsToggler from './ContestDetailsToggler';
import MainButton from '../../Atoms/MainButton/MainButton';
import { useState } from 'react';
import ContestDetailsContent from './ContestDetailsContent';

const ContestDetails = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <ContestDetailsStyled>
      <Map />
      <ContestDetailsToggler
        onClick={toggleHandler}
        toggle={toggle}
      ></ContestDetailsToggler>
      {toggle && <ContestDetailsContent />}
      <div
        style={{
          margin: '1rem',
        }}
      >
        <MainButton secondary text={'ZGŁOŚ SWÓJ UDZIAŁ'} />
      </div>
    </ContestDetailsStyled>
  );
};

export default ContestDetails;
