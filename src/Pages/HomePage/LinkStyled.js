import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
  color: black;
  border-radius: 4px;
  border: 1px solid black;
  cursor: pointer;
  font-size: 0.7rem;
  text-decoration: none;
  margin: 0.25rem;
  padding: 0.2rem;
  text-transform: uppercase;
`;

export default LinkStyled;
