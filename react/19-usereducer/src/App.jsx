import { useState } from 'react'
import './App.css'

import BucketList from './BucketList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BucketList />
    </div>
  )
}

export default App
