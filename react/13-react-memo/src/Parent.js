
import { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log('Parent Rendering');
  return (
    <div className="parent">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    
      <Child header={`I am a ${count} child`} />
    </div>
  );
}

export default Parent;