import { useEffect, useRef } from "react";

const RefProps = () => {
  
  const counter = useRef(0);

  const handleClick = () => {
    counter.current = counter.current + 1;
    console.log(counter.current);
  };

  useEffect(() => {
    console.log("counter changed to: ", counter.current);
  }, [counter]);

  return (
    <div>
      <h2>Value: {counter.current}</h2>
      <button onClick={ handleClick }>Click</button>
    </div>
  );
};

export default RefProps;
