import propTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.div`
  display: flex;
  align-self: center;
  width: 343px;
  height: 50px;
  color: black;
  background: transparent;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid #9aa5b1;
  font-size: 15px;
  font-weight: 600;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: #f5f5f5;
  }
  // if you put selectors in without the ampersand, they will refer to children of the component //
  .justifyLeft {
    margin-left: 25px;
  }
  .justifyRight {
    margin-right: 25px;
  }
`;

const LeaderboardBtn = (props) => {
  const { text, score } = props;
  return (
    <Btn>
      <div className="justifyLeft">{text}</div>
      <div className="justifyRight">{score}</div>
    </Btn>
  );
};

LeaderboardBtn.propTypes = {
  text: propTypes.string,
  score: propTypes.number,
};

export default LeaderboardBtn;
