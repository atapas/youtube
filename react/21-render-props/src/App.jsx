
import Title from './Title';

function App() {

  return (
    <div className="App">
      <Title render={() => (
        <h1>I am a render prop</h1>
      )} />
    </div>
  )
}

export default App
