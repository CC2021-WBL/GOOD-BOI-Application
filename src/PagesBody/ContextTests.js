import { ParticipantContext } from '../Context/ParticipantContext';
import { useContext } from 'react';

const ContextTestPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, setData } = useContext(ParticipantContext);

  const dog = data.dog;
  console.log(dog);

  return (
    <>
      <h1>ContextTestPagr</h1>
      <div>{}</div>
    </>
  );
};

export default ContextTestPage;
