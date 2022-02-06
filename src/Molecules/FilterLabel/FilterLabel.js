/* eslint-disable no-unused-vars */

import FilterLabelStyled from './FilterLabelStyled';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import { COLORSMOTIVE as c } from '../../Consts/infoLabelConsts';
import propTypes from 'prop-types';
import { useRef } from 'react';

const FilterLabel = ({ clickPresent, clickPast, clickFuture, clickAll }) => {
  return (
    <FilterLabelStyled>
      <InfoLabel
        pointOnTimeLine="w trakcie"
        colorMotive={c.GREEN}
        handleClick={clickPresent}
      ></InfoLabel>
      <InfoLabel
        pointOnTimeLine="archiwalny"
        colorMotive={c.GREY}
        handleClick={clickPast}
      ></InfoLabel>
      <InfoLabel
        pointOnTimeLine="nadchodzący"
        colorMotive={c.BLUE}
        handleClick={clickFuture}
      ></InfoLabel>
      <InfoLabel
        pointOnTimeLine="X"
        colorMotive={c.WHITE}
        handleClick={clickAll}
      ></InfoLabel>
    </FilterLabelStyled>
  );
};

FilterLabel.propTypes = {
  clickFuture: propTypes.func,
  clickPast: propTypes.func,
  clickPresent: propTypes.func,
  clickAll: propTypes.func,
};

export default FilterLabel;
