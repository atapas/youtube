import './App.css';

import Family from './context/Family';
import {FamilyContext} from './context/FamilyContext';

const familySecret = {
  familyName: 'The Smiths',
  onlyParentCanSee: () => {
    return `The Smiths are the best!`;
  },
  onlyGrandChildrenShouldKnow: () => {
    return `They are the best!`;
  }
}

function App() {
  return (
    <FamilyContext.Provider value={familySecret}>
      <Family />
    </FamilyContext.Provider>      
  );
}

export default App;