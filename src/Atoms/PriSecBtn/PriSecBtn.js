import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  // component "stylowy"
  width: 343px;
  height: 50px;
  color: ${(props) => (props.primary ? 'black' : 'whitesmoke')};
  font-size: 15px;
  font-weight: 600;
  background: ${(props) => (props.primary ? '#e3e3e3' : '#2f80ed')};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PriSecBtn = (props) => {
  return <Button primary={props.primary}>{props.text}</Button>;
};

PriSecBtn.propTypes = {
  primary: PropTypes.bool,
  text: PropTypes.string,
};

export default PriSecBtn;
