import styled from 'styled-components';

const NavFooterBtnStyled = styled.button`
  box-sizing: border-box;
  background: transparent;
  color: ${(props) => (props.active ? 'black' : '#7B8794')};
  height: 38px;
  width: 61px;
  font-size: 16px;
  margin: 0;
  padding: 0;
  border: none;
  border-bottom: ${(props) => (props.active ? '5px solid black' : 'none')};
  &:hover {
    background: #f5f5f5;
  }
`;

export default NavFooterBtnStyled;
