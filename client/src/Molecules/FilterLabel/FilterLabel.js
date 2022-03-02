/* eslint-disable no-unused-vars */

import FilterLabelStyled from './FilterLabelStyled';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import { TIME } from '../../Consts/infoLabelConsts';
import { COLORSMOTIVE as c } from '../../Consts/infoLabelConsts';
import propTypes from 'prop-types';
import { useRef } from 'react';

const FilterLabel = ({ onClick }) => {
  return (
    <FilterLabelStyled>
      <div className="wrapper">
        <div className="innerWrapper">
          <InfoLabel
            pointOnTimeLine="w trakcie"
            colorMotive={c.GREEN}
            handleClick={(event) => onClick(TIME.PRESENT, event)}
          ></InfoLabel>
          <InfoLabel
            pointOnTimeLine="archiwalny"
            colorMotive={c.GREY}
            handleClick={(event) => onClick(TIME.PAST, event)}
          ></InfoLabel>
          <InfoLabel
            pointOnTimeLine="nadchodzący"
            colorMotive={c.BLUE}
            handleClick={(event) => onClick(TIME.FUTURE, event)}
          ></InfoLabel>
          <InfoLabel
            pointOnTimeLine="X"
            colorMotive={c.WHITE}
            handleClick={(event) => onClick(TIME.UNKNOWN, event)}
          ></InfoLabel>
        </div>
      </div>
    </FilterLabelStyled>
  );
};

FilterLabel.propTypes = {
  onClick: propTypes.func,
};

export default FilterLabel;
