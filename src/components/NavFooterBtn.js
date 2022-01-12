import styled from "styled-components";

// If button has attribute "active", then change bottom border and font color,
// text to be desided on render with props.text

const Button = styled.button`
  box-sizing: border-box;
  background: transparent;
  color: ${(props) => (props.active ? "black" : "#7B8794")};
  height: 38px;
  width: 61px;
  font-size: 16px;
  margin: 0;
  padding: 0;
  border: none;
  border-bottom: ${(props) => (props.active ? "5px solid black" : "none")};
  &:hover {
    background: #f5f5f5;
  }
`;
const NavFooterBtn = (props) => {
  return <Button active={props.active}>{props.text}</Button>;
};

export default NavFooterBtn;
