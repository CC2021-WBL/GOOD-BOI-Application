import { useState } from 'react';

const EBtest = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount((preVal) => preVal + 1);
  };
  if (count === 5) {
    throw new Error('Oh Noooooooo');
  }

  return (
    <>
      <div className="counter--block">
        <span>Counter</span>
        <span>{count}</span>
      </div>
      <button onClick={increaseCounter}>Increase count</button>
    </>
  );
};

export default EBtest;
