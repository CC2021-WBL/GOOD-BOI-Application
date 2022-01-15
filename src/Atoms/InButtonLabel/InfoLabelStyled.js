import styled from 'styled-components';

const LabelStyled = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem;
  height: 1.25rem;
  font-family: 'Mulish', sans-serif;
  font-size: 0.7em;
  font-style: normal;
  font-weight: 400;
  border: solid 1px #323f4b;
  border-radius: 0.25rem;
  line-height: 1em;
  ${(props) =>
    props.isClassCompleted || props.areExercisesCompleted
      ? `background: #97E3B3; color: #1A6234;  border: solid 1px #1A6234;`
      : `background: transparent`};
`;

export default LabelStyled;
