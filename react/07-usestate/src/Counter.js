import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));

  const incrBy3 = () => {
    console.log('incrBy3');
    //setCounter(counter + 3);
    setCounter((prev) => prev + 3);
  }

  return(
    <div>
      <div className="counter-box">
        <span>{counter}</span>
        <button onClick={incrBy3}>+ 3</button>
      </div>
    </div>
  )
};

export default Counter;