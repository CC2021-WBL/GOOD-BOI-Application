import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

import ContestFilterTogglerStyled from './ContestFilterToggleStyled';
import PropTypes from 'prop-types';
import { device } from './../../Consts/devices';
import styled from 'styled-components';

const ContestFilterToggler = ({ onClick, toggle }) => {
  return (
    <ContestFilterGridWrapper>
      <ContestFilterTogglerStyled onClick={onClick}>
        {toggle ? <GoTriangleUp /> : <GoTriangleDown />}
        <p>TERMIN</p>
      </ContestFilterTogglerStyled>
    </ContestFilterGridWrapper>
  );
};
const ContestFilterGridWrapper = styled.div`
  @media only screen and (${device.tablet}) {
    display: grid;
    position: relative;
    width: 10%;
    margin: auto;
    grid-area: 2 / 1 / 3 / 4;
    border: 1px solid ${({ theme }) => theme.grey200}; // ?
  }
  @media only screen and (${device.desktop}) {
    display: grid; //
    position: relative; //
    grid-area: 2 / 1 / 3 / 4;
    border: 2px solid ${({ theme }) => theme.grey200}; // ?
  }
`;

ContestFilterToggler.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ContestFilterToggler;
