import NavLinkStyled from './../NavLinkStyled';
import styled from 'styled-components';
import { useState } from 'react';

const MenuItem = (props) => {
  const { text, linkTo, icon, formolecule } = props;

  return (
    <MenuItemWrapper>
      <NavLinkStyled to={linkTo} formolecule={formolecule}>
        {icon}
        {text}
      </NavLinkStyled>
    </MenuItemWrapper>
  );
};

const MenuItemWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-items: space-between;
  gap: 1rem;
  height: 3rem;
  padding: 0 0 0 0rem;
  color: ${({ theme }) => theme.grey400};
  &:hover {
    background: ${({ theme }) => theme.grey00};
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
export default MenuItem;
