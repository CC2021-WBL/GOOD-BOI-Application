import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
  padding: 0.2rem;
  border: 1px solid black;
  margin: 0.25rem;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  font-size: 0.7rem;
  text-decoration: none;
  text-transform: uppercase;
`;

export default LinkStyled;
