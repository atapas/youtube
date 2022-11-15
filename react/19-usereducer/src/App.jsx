import { useState } from 'react'
import './App.css'

import BucketListWithReducer from './BucketListWithReducer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BucketListWithReducer />
    </div>
  )
}

export default App
