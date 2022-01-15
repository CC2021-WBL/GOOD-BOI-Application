import styled from 'styled-components';

const PriSecBtnStyled = styled.button`
  display: block;
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

export default PriSecBtnStyled;
