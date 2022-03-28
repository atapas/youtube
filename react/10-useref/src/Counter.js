import { useState, useRef, useEffect } from 'react';

const Counter = () => {
  const countRef = useRef(0);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    countRef.current = countRef.current + 1;
  });
  return(
    <>
    <input 
        type="text" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} />
      {countRef.current}
    </>
  )
};

export default Counter;